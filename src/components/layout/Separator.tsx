interface SeparatorProps {
  class?: string;
}

export default function Separator(props: SeparatorProps) {
  const { class: className = "" } = props;
  return <div class={`h-px w-full bg-white/50 ${className}`} aria-hidden="true" />;
}
