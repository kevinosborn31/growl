import React from 'react'

import './growl.css'

export const Growl = ({ active, message, onDismissed }) => (
  <div className={`growl${active ? " active" : ""}`}>
    {message}
    <div onClick={onDismissed} className="growl-close" />
  </div>
)

export function useGrowl(timeout = 3000) {
    const [growlActive, setGrowlActive] = React.useState(false)
    

    return [
        growlActive, 

        (active) => {
          setGrowlActive(active)
          setTimeout(function() { setGrowlActive(false); }, timeout);
        },
    ]
}
