import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    name: 'Snake Game',
    path: '/snake',
    description: 'Play the classic snake game. Use your arrow keys to control the snake and eat food to grow. Try not to run into yourself or the walls!'
  },
  {
    name: 'Match Pairs',
    path: '/match-pairs',
    description: 'Test your memory by matching pairs of animal emoji cards. Flip two cards at a time and try to find all the pairs with the fewest moves.'
  },
  {
    name: 'Get Cat Images',
    path: '/cat-images',
    description: 'Browse random cat images from TheCatAPI. You can also filter by breed using the dropdown menu.'
  }
];

function Features() {
  return (
    <div className="container mt-5">
      <style>{`
        .btn-outline-primary:hover, .btn-outline-primary:focus {
          background-color: #0d6efd !important;
          color: #fff !important;
          border-color: #0d6efd !important;
        }
        .snake-btn-hover:hover, .snake-btn-hover:focus {
          background-color: #66fa6b !important;
          color: #222 !important;
          border-color: #66fa6b !important;
        }
        .match-btn-hover:hover, .match-btn-hover:focus {
          background-color: orange !important;
          color: #fff !important;
          border-color: orange !important;
        }
        .cat-btn-hover:hover, .cat-btn-hover:focus {
          background-color: purple !important;
          color: #fff !important;
          border-color: purple !important;
        }
      `}</style>
      <h2 className="mb-4 text-center">Explore Our Features</h2>
      <div className="row justify-content-center">
        {features.map((feature, idx) => (
          <div key={idx} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column align-items-center">
                <h4 className="card-title mb-3">{feature.name}</h4>
                <p className="card-text text-center">{feature.description}</p>
                <Link to={feature.path} 
                  className={
                    `btn mt-auto ` +
                    (feature.name === 'Snake Game' ? 'snake-btn-hover' : feature.name === 'Match Pairs' ? 'match-btn-hover' : feature.name === 'Get Cat Images' ? 'cat-btn-hover' : 'btn-outline-primary')
                  }
                  style={
                    feature.name === 'Snake Game'
                      ? { backgroundColor: '#fff', borderColor: '#66fa6b', color: '#66fa6b', borderWidth: 2 }
                      : feature.name === 'Match Pairs'
                        ? { backgroundColor: '#fff', borderColor: 'orange', color: 'orange', borderWidth: 2 }
                        : feature.name === 'Get Cat Images'
                          ? { backgroundColor: '#fff', borderColor: 'purple', color: 'purple', borderWidth: 2 }
                          : {}
                  }
                >Go</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features; 