import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import climateImg from './assets/climateImg.png';
import carbonImg from './assets/carbonImg.png';
import renewableImg from './assets/renewableImg.png';
import slide1 from './assets/slide1.png';
import slide2 from './assets/slide2.png';
import slide3 from './assets/slide3.png';
import slide21 from './assets/slide21.png';
import slide22 from './assets/slide22.png';
import sustainable from './assets/sustainable.png'; 
import advocacy from './assets/advocacy.png';
import water from './assets/water.png';
Modal.setAppElement('#root');

const CourseCard = ({ title, description, duration, difficulty, startCourse, imageUrl }) => (
  <div className="border rounded-lg overflow-hidden mb-6">
    <div className="h-40 bg-gray-100 relative">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <span className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded text-sm">
        {duration}
      </span>
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{difficulty}</span>
        <button onClick={startCourse} className="bg-gray-900 text-white px-4 py-2 rounded text-sm">
          Start Course
        </button>
      </div>
    </div>
  </div>
);

const SlideProgressIndicator = ({ currentSlide, totalSlides }) => (
  <div className="flex justify-center mt-4">
    {[...Array(totalSlides)].map((_, index) => (
      <div
        key={index}
        className={`w-3 h-3 rounded-full mx-1 ${index <= currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
      />
    ))}
  </div>
);

const CourseModal = ({ isOpen, onRequestClose, content }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
          width: '90%',
          height: '90%',
          margin: 'auto',
          padding: '20px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <h2 className="text-3xl font-bold mb-6">{content.title}</h2>
      <div className="flex-grow overflow-hidden">
        <Slider {...settings} className="h-full">
          {(content.slides || []).map((slide, index) => (
            <div key={index} className="p-4 h-full flex flex-col items-center justify-center">
              <div className="flex items-center justify-center h-[70vh]">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-xl text-center max-w-3xl mt-6">{slide.text}</p>
            </div>
          ))}
        </Slider>
      </div>
      <SlideProgressIndicator 
        currentSlide={currentSlide}
        totalSlides={content.slides ? content.slides.length : 0}
      />
      <button
        onClick={onRequestClose}
        className="bg-gray-900 text-white px-6 py-3 rounded mt-6 text-lg self-center"
      >
        Close Course
      </button>
    </Modal>
  );
};

export default function ClimateCoursesSection() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({});

  const openCourse = (course) => {
    setCurrentCourse(course);
    setModalIsOpen(true);
  };

  const courses = [
    {
      title: "Understanding Climate Change",
      description: "A quick overview of the causes and effects of climate change.",
      duration: "10 min",
      difficulty: "Beginner",
      imageUrl: climateImg,
      slides: [
        { image: slide1, text: "Climate change is caused by..." },
        { image: slide2, text: "Effects include rising temperatures..." },
        { image: slide3, text: "We can combat climate change by..." }
      ]
    },
    {
      title: "Carbon Footprint Calculation",
      description: "Learn to measure your personal carbon footprint.",
      duration: "12 min",
      difficulty: "Beginner",
      imageUrl: carbonImg,
      slides: [
        { image: slide21, text: "Your carbon footprint is the total amount of..." },
        { image: slide22, text: "It can be reduced by..." }
      ]
    },
    // Placeholder courses with realistic titles and descriptions
    {
      title: "Renewable Energy Basics",
      description: "Explore the fundamentals of renewable energy sources and their benefits.",
      duration: "15 min",
      difficulty: "Beginner",
      imageUrl: renewableImg,
      slides: [
        { image: slide1, text: "Renewable energy includes solar, wind, and hydro..." },
        { image: slide2, text: "Benefits include reduced emissions and sustainability." }
      ]
    },
    {
      title: "Sustainable Practices at Home",
      description: "Learn how to implement sustainable practices in your daily life.",
      duration: "20 min",
      difficulty: "Intermediate",
      imageUrl: sustainable,
      slides: [
        { image: slide21, text: "Simple changes can make a big difference..." },
        { image: slide22, text: "Consider energy efficiency and waste reduction." }
      ]
    },
    {
      title: "Climate Policy and Advocacy",
      description: "Understand the role of policies and advocacy in combating climate change.",
      duration: "30 min",
      difficulty: "Advanced",
      imageUrl: advocacy,
      slides: [
        { image: slide1, text: "Policies can drive change at local and global levels..." },
        { image: slide2, text: "Advocacy helps to influence decision-makers." }
      ]
    },
    {
      title: "Water Conservation Techniques",
      description: "Discover effective methods for conserving water in various settings.",
      duration: "25 min",
      difficulty: "Beginner",
      imageUrl: water,
      slides: [
        { image: slide21, text: "Water-saving techniques can be applied at home..." },
        { image: slide22, text: "Learn about rainwater harvesting and xeriscaping." }
      ]
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Climate Action Short Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} startCourse={() => openCourse(course)} />
        ))}
      </div>
      <CourseModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} content={currentCourse} />
    </div>
  );
}
