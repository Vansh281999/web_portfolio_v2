import { useState, useCallback, useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Assistive Vision",
    category: "Wearable 360° Hazard Detection Headset",
    tools: "YOLOv12, LiDAR Fusion, DCP Dehazing, Risk Scoring, Audio Feedback",
    image: "/images/placeholder.webp",
    link: "https://github.com/Vansh281999",
  },
  {
    title: "Cloud IDS",
    category: "Intrusion Detection System for Cloud Security",
    tools: "XGBoost, Random Forest, Neural Networks, AWS S3 & SageMaker",
    image: "/images/placeholder.webp",
    link: "https://github.com/Vansh281999",
  },
  {
    title: "Resume RAG",
    category: "LLM Pipeline for Resume Screening",
    tools: "LangChain, OpenAI, HuggingFace, FAISS, Streamlit",
    image: "/images/placeholder.webp",
    link: "https://github.com/Vansh281999",
  },
  {
    title: "Plate Recognition",
    category: "Automated Vehicle Authorization System",
    tools: "Python, OpenCV, OCR, SQLite",
    image: "/images/placeholder.webp",
    link: "https://github.com/Vansh281999",
  },
  {
    title: "Realtime Chat",
    category: "Full-Stack Messaging Application",
    tools: "React, Socket.io, Express, MongoDB, JWT",
    image: "/images/placeholder.webp",
    link: "https://github.com/Vansh281999",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const trackContainerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const dragStartedAt = useRef(0);
  const draggingRef = useRef(false);
  const dragMovedRef = useRef(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const getClientX = (e: TouchEvent | MouseEvent | React.TouchEvent | React.MouseEvent) => {
    if ("touches" in e && e.touches.length) return e.touches[0].clientX;
    if ("changedTouches" in e && e.changedTouches.length)
      return e.changedTouches[0].clientX;
    return (e as MouseEvent).clientX;
  };

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    if (isAnimating) return;
    draggingRef.current = true;
    dragStartedAt.current = Date.now();
    dragStartX.current = getClientX(e);
    dragMovedRef.current = false;
    setIsDragging(true);
    setDragOffset(0);

    const handleMove = (ev: TouchEvent | MouseEvent) => {
      if (!draggingRef.current || !trackContainerRef.current) return;
      const x = getClientX(ev);
      const delta = x - dragStartX.current;
      if (Math.abs(delta) > 5) dragMovedRef.current = true;
      const width = trackContainerRef.current.offsetWidth || 1;
      const clamped = Math.max(-width * 0.4, Math.min(width * 0.4, delta));
      setDragOffset(clamped);
    };

    const handleEnd = (ev: TouchEvent | MouseEvent) => {
      if (!draggingRef.current || !trackContainerRef.current) return;
      draggingRef.current = false;
      setIsDragging(false);

      const x = getClientX(ev);
      const delta = x - dragStartX.current;
      const width = trackContainerRef.current.offsetWidth || 1;
      const elapsed = Date.now() - dragStartedAt.current;
      const velocity = Math.abs(delta) / Math.max(elapsed, 1);
      const threshold = width * 0.15;

      setDragOffset(0);

      if (delta <= -threshold || (delta < 0 && velocity > 0.5)) {
        goToNext();
      } else if (delta >= threshold || (delta > 0 && velocity > 0.5)) {
        goToPrev();
      }

      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("touchend", handleEnd);
  };

  const baseOffset = -currentIndex * 100;
  const dragPercent = trackContainerRef.current
    ? (dragOffset / trackContainerRef.current.offsetWidth) * 100
    : 0;

  const handleTrackClickCapture = (e: React.MouseEvent) => {
    if (dragMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      dragMovedRef.current = false;
    }
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div
            className={`carousel-track-container${isDragging ? " dragging" : ""}`}
            ref={trackContainerRef}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            onClickCapture={handleTrackClickCapture}
          >
            <div
              className={`carousel-track${isDragging ? " no-transition" : ""}`}
              style={{
                transform: `translateX(${baseOffset + dragPercent}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
