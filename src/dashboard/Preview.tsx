import React from 'react';
import graphics from './graphics.json'

export function Preview() {
	return (
		<>
			{new Array(graphics.length).fill(undefined).map((_, i) => (
				<>
				<h3>{graphics[i].title}</h3>
				<div className="wrapper">
					<div className="preview">
						{new Array(graphics.length).fill(undefined).map((_, g) => (
							<iframe src={graphics[i].graphics[g].url} width={graphics[i].graphics[g].width} height={graphics[i].graphics[g].height} scrolling="no"></iframe>
						))}
					</div>
				</div>
				</>
			))}
		</>
	)
}
