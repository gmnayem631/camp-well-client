import useAuth from "../../../hooks/useAuth";

const ParticipantHome = () => {
  const { user } = useAuth();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Welcome, {user.displayName}</h2>
      <p>Check your registered camps, feedback, and schedules here.</p>
    </div>
  );
};

export default ParticipantHome;
