import CourseCard from "./CourseCard";

function CourseList({ data }) {
  if (data.length === 0) {
    return null;
  }

  return (
    <div className="course-grid">
      {data.map((item) => (
        <CourseCard key={item.id} course={item} />
      ))}
    </div>
  );
}

export default CourseList;