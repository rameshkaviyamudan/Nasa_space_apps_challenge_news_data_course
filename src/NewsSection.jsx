import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import axios from 'axios';

const truncateText = (text, maxLength = 200) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...'; // Append ellipsis
};

export const NewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/rss-feed', {
          responseType: 'text'
        });
        
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "text/xml");
        const items = xmlDoc.getElementsByTagName('item');

        const parsedItems = Array.from(items).map(item => {
          const descriptionHTML = item.getElementsByTagName('description')[0]?.textContent || '';
          const descriptionDoc = new DOMParser().parseFromString(descriptionHTML, "text/html");
          const firstParagraph = descriptionDoc.querySelector('p')?.textContent || '';

          return {
            title: item.getElementsByTagName('title')[0]?.textContent || '',
            description: firstParagraph, // Use the first <p> as description
            pubDate: item.getElementsByTagName('pubDate')[0]?.textContent || '',
            link: item.getElementsByTagName('link')[0]?.textContent || '',
            image: item.getElementsByTagName('media:thumbnail')[0]?.getAttribute('url') || ''
          };
        });

        setNewsItems(parsedItems.slice(0, 5));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div>Loading latest climate news...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="space-y-4">
      {newsItems.map((item, index) => (
        <Card key={index} className="flex">
          {item.image && (
            <img src={item.image} alt={item.title} className="w-16 h-16 mr-4 object-cover" />
          )}
          <div className="flex-1">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{new Date(item.pubDate).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <div dangerouslySetInnerHTML={{ __html: truncateText(item.description) }} />
            </CardContent>
            <CardFooter>
              <Button onClick={() => window.open(item.link, '_blank')}>
                Read More
              </Button>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
};
