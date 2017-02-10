import React from 'react';

export default ({ sketches }) => {
  return(
    <section>
      <ul>
      {
        sketches.map((sketch) =>
          <li>{ sketch.id }</li>
        )
      }
      </ul>
    </section>
  )
}
