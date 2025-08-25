export default function FeatureBlock({
  id,
  title,
  image,
  imageLeft = false,
  compact = false,
  body,
  children,
}) {
  const wrap = "container max-w-screen-2xl mx-auto px-6";
  const shell = [
    // scroll-mt offsets anchor position so sticky header doesn't cover the title
    "bg-navy text-cream rounded-3xl grid md:grid-cols-2 items-center scroll-mt-28 md:scroll-mt-32",
    compact ? "p-6 md:p-8 gap-6" : "p-8 md:p-12 gap-8",
  ].join(" ");

  const heading = compact
    ? "text-2xl md:text-3xl font-heading font-extrabold mb-3"
    : "text-3xl md:text-4xl font-heading font-extrabold mb-4";
  const copy = [
    "font-body opacity-90 leading-relaxed whitespace-normal break-words",
    compact ? "text-base md:text-lg" : "text-lg md:text-xl",
  ].join(" ");

  return (
    <div className={wrap} id={id}>
      <div className={shell}>
        {/* Text first on mobile; alternate on desktop */}
        <div className={`order-1 ${imageLeft ? "md:order-2" : "md:order-1"}`}>
          <h3 className={heading}>{title}</h3>
          <div className={copy}>{children ?? body}</div>
        </div>
        <img
          src={image}
          alt={title}
          className={`w-full aspect [16/9] object-cover rounded-2xl shadow-md order-2 ${
            imageLeft ? "md:order-1" : "md:order-2"
          }`}
        />
      </div>
    </div>
  );
}
