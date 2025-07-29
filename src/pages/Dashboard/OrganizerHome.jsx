import useAuth from "../../hooks/useAuth";

const OrganizerHome = () => {
  const { user } = useAuth();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Welcome, {user.displayName}</h2>
      <p>Here you can manage your camps, view participants, and more.</p>
    </div>
  );
};

export default OrganizerHome;
