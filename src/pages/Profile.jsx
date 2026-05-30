import { useAuth } from '../context/AuthContext';
function Profile() {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            <h1>Profile</h1>
            {user && (
                <>
                    <h2>{user.fullname}</h2>
                    <h2>{user.email}</h2>
                    <h2>{user.role}</h2>
                </>
            )}
        </div>
    )
}
export default Profile;