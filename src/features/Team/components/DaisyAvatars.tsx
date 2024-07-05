
import "../page/DaisyAvatars.css"; 

const avatars = [
  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  "https://img.daisyui.com/images/stock/photo-1558367501-4f5a7d6a37b4.jpg",
  "https://img.daisyui.com/images/stock/photo-1567620905732-2d1ec7ab7445.jpg",
  "https://img.daisyui.com/images/stock/photo-1560347876-aeef00ee58a1.jpg",
  "https://img.daisyui.com/images/stock/photo-1569225390041-924bc9ef2b32.jpg",
  "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
];

const DaisyAvatars = () => {
  return (
    <div className="daisy-avatars">
      {avatars.map((avatar, index) => (
        <div key={index} className="avatar">
          <div className="w-24 rounded-full">
            <img src={avatar} alt={`Avatar ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DaisyAvatars;
