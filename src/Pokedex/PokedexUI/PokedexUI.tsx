import React from "react";

export const PokedexUI: React.FC = () => {
  return (
    <div
      style={{
        height: "400px",
        width: "300px",
        backgroundColor: "#aa121c",
        border: "10px solid #442222",
        borderRadius: "20px 20px",
        position: "relative",
        marginBottom: "50px",
      }}
    >
      <div
        style={{
          height: "400px",
          width: "300px",
          //   backgroundColor: "#aa121c",
          border: "10px solid #442222",
          borderRadius: "20px 20px",
          clipPath: "polygon(0 0, 100% 0, 100% 15%, 75% 15%, 50% 30%, 0 30%)",
          position: "absolute",
          //   marginBottom: "50px",
        }}
      ></div>

      {/* buttons */}
      <div
        style={{
          top: "25px",
          left: "25px",
          height: "40px",
          width: "40px",
          backgroundColor: "#51e4f5",
          borderRadius: "100%",
          position: "absolute",
          border: "6px solid #442222",

          //   boxShadow:
          //     "0px 0px 0px 1px #333333, 0px 0px 0px 8px #ffffff, 0px 0px 0px 9px #333333",
        }}
      />

      <div
        style={{
          top: "20px",
          right: "90px",
          height: "40px",
          position: "absolute",
        }}
      >
        <div
          style={{
            top: "0px",
            left: "0px",
            height: "18px",
            width: "18px",
            backgroundColor: "red",
            borderRadius: "100%",
            position: "absolute",
            border: "4px solid #442222",
          }}
        />

        <div
          style={{
            top: "0px",
            left: "25px",
            height: "18px",
            width: "18px",
            backgroundColor: "yellow",
            borderRadius: "100%",
            position: "absolute",
            border: "4px solid #442222",
          }}
        />

        <div
          style={{
            top: "0px",
            left: "50px",
            height: "18px",
            width: "18px",
            backgroundColor: "green",
            borderRadius: "100%",
            position: "absolute",
            border: "4px solid #442222",
          }}
        />
      </div>
    </div>
  );
};
