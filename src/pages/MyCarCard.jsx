import './MyCarCard.css';

const MYCAR_VIDEO_URL =
  'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/video-mycampaigns.mp4';

export default function MyCarCard() {
  return (
    <article className="mycar-card">
      <video
        className="mycar-card__video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={MYCAR_VIDEO_URL} type="video/mp4" />
      </video>
    </article>
  );
}