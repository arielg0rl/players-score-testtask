import React from "react"

export function Empty() {
  return (
    <div>
      <div className="EmptyplayersList">
        <div className="EmptyplayersList--empty">
          no players available
        </div>
        <div className="EmptyplayersList__loadIcon rotate-center"></div>
      </div>
    </div>
  )
}

