function CourseCard({ course }) {
  const getCategoryBadgeColor = (category) => {
    const colors = {
      Frontend: "#FF6B6B",
      Backend: "#4ECDC4",
      Database: "#45B7D1",
      Fullstack: "#F7DC6F",
    };
    return colors[category] || "#95A5A6";
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return "#27AE60";
    if (rating >= 4) return "#F39C12";
    return "#E74C3C";
  };

  return (
    <div className="course-card">
      <div className="course-header">
        <span
          className="category-badge"
          style={{ backgroundColor: getCategoryBadgeColor(course.category) }}
        >
          {course.category}
        </span>
        <span className="rating" style={{ color: getRatingColor(course.rating) }}>
          ⭐ {course.rating}
        </span>
      </div>
      <h3 className="course-title">{course.name}</h3>
      <div className="course-details">
        <p className="detail-item">👨‍🏫 <strong>Instructor:</strong> {course.instructor}</p>
        <p className="detail-item">⏱️ <strong>Duration:</strong> {course.duration}</p>
      </div>
      <button className="course-btn">Enroll Now</button>
    </div>
  );
}

export default CourseCard;