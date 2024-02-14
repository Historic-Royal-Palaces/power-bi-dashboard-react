function Iframe({ src }) {
  return (
    <div className="mt-4">
      <iframe src={src} allowFullScreen={true}></iframe>
    </div>
  );
}

export default Iframe;
