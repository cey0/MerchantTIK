interface BluePanelProps {
  id?: string;
  class?: string;
  title?: string;
  children?: any;
}

export default function BluePanel(props: BluePanelProps) {
  const { id, class: className = "", title } = props;
  return (
    <section
      id={id}
      class={`mx-auto bg-linear-to-b from-[#2B6B8E] to-[#1F5273] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.3)] ${className}`}
    >
      {title && (
        <h2 class="text-2xl md:text-3xl font-bold text-white text-left pt-6 px-6 md:px-8 pb-3 tracking-wide uppercase">
          {title}
        </h2>
      )}
      <div class={`px-6 md:px-8 ${title ? "pb-6 md:pb-8" : "p-6 md:p-8"}`}>{props.children}</div>
    </section>
  );
}
