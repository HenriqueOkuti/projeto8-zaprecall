export default function Header(image) {
    return (
        <div className="header">
            <img src={image.image} alt="" />
            <div className="text">ZapRecall</div>
        </div>
    );
}