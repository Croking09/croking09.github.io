import profileImg from "../../../assets/profile.jpg";

function ProfileImg() {
  return (
    <div className="relative">
      <img
        src={profileImg}
        alt="Profile"
        className="w-60 h-60 rounded-full object-cover mb-2 shadow-lg border-white border-4 border-solid"
      />
      <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-green-500 border-6 border-bg" />
    </div>
  );
}

export default ProfileImg;
