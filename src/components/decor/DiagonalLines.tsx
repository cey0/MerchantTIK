type LineDef = {
  w: number;
  t: number;
  l: number;
  transform: string;
};

interface DiagonalLinesProps {
  class?: string;
  strokeClass?: string;
  lines?: Array<LineDef>;
}

const DEFAULT_LINES: LineDef[] = [
  { w: 1213.7, t: 639.6, l: 1033.2, transform: 'rotate(-148.4deg) skew(-20.2deg) scaleY(.94)' },
  { w: 1481.9, t: 350.6, l: 1439.6, transform: 'rotate(-166.3deg) skew(-13deg) scaleY(.97)' },
  { w: 758.9, t: 646.2, l: 1216, transform: 'rotate(-122.2deg) skew(-15.3deg) scaleY(.96)' },
  { w: 703.1, t: 0.2, l: 783, transform: 'rotate(109.9deg) skew(10deg) scaleY(.98)' },
  { w: 757.7, t: 0.3, l: 1441, transform: 'rotate(122.5deg) skew(15.4deg) scaleY(.96)' },
  { w: 596.6, t: -0.4, l: 1063.9, transform: 'rotate(50.8deg) skew(-17.7deg) scaleY(.95)' },
  { w: 846.6, t: 0.3, l: 482.9, transform: 'rotate(124.7deg) skew(16.2deg) scaleY(.96)' }
];

export default function DiagonalLines(props: DiagonalLinesProps) {
  const {
    class: className = '',
    strokeClass = 'border-[#3a719580]',
    lines = DEFAULT_LINES
  } = props;

  const linesConfig: LineDef[] = lines ?? DEFAULT_LINES;

  return (
    <div class={`pointer-events-none ${className}`}>
      {linesConfig.map((line, idx) => (
        <div
          aria-hidden="true"
          class={`absolute border-t ${strokeClass}`}
          style={{
            width: `${line.w}px`,
            height: '1px',
            top: `${line.t}px`,
            left: `${line.l}px`,
            transform: line.transform,
            'transform-origin': '0 0'
          }}
          data-index={idx}
        />
      ))}
    </div>
  );
}
