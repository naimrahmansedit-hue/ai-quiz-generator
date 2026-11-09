// One square quiz card on the dashboard (title, date, score).
export default function QuizCard({ quiz }) {
  return (
    <div>
      <h3>{quiz.title}</h3>
      <p>{quiz.date} — Score: {quiz.score}%</p>
    </div>
  );
}
