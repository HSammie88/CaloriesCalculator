import type { CSSProperties } from "react";

interface ILoggedProps {
  style: CSSModuleClasses;
  currentColors: { [key: string]: string };
}

export default function Logged({ currentColors, style }: ILoggedProps) {
  const gridStyle: CSSProperties = {
    backgroundColor: currentColors.card,
    borderRadius: "10px",
    color: currentColors.text,
    boxShadow: "0 0 5px gray",
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  };

  return (
    <>
      <div className={style.logged_container}>
        <div style={gridStyle} className={style.quick_actions}>
            <h2>Quick Actions</h2>
        </div>
        <div style={gridStyle} className={style.diagram}>
            <h2>Diagram</h2>
        </div>
        <div style={gridStyle} className={style.diagram_info}>
            <h2>Diagram Info</h2>
        </div>
      </div>
    </>
  );
}
