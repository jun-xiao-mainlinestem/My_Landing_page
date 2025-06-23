import React, { useRef, useEffect, useState } from 'react';

const CANVAS_SIZE = 400;
const SCALE = 20;
const INITIAL_SNAKE = [
  { x: 8, y: 10 },
  { x: 7, y: 10 },
];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const INITIAL_FOOD = { x: 12, y: 10 };

function getRandomFood() {
  return {
    x: Math.floor(Math.random() * (CANVAS_SIZE / SCALE)),
    y: Math.floor(Math.random() * (CANVAS_SIZE / SCALE)),
  };
}

function SnakeGame() {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        };
        // Check collision with walls
        if (
          newHead.x < 0 ||
          newHead.x >= CANVAS_SIZE / SCALE ||
          newHead.y < 0 ||
          newHead.y >= CANVAS_SIZE / SCALE
        ) {
          setGameOver(true);
          return prevSnake;
        }
        // Check collision with self
        if (prevSnake.some((seg) => seg.x === newHead.x && seg.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }
        let newSnake = [newHead, ...prevSnake];
        // Check food
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(getRandomFood());
          setScore((s) => s + 1);
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [direction, food, gameOver]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    // Draw snake
    ctx.fillStyle = 'green';
    snake.forEach((seg) => {
      ctx.fillRect(seg.x * SCALE, seg.y * SCALE, SCALE, SCALE);
    });
    // Draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * SCALE, food.y * SCALE, SCALE, SCALE);
  }, [snake, food]);

  const handleRestart = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(getRandomFood());
    setGameOver(false);
    setScore(0);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <h2>Snake Game</h2>
      <p>Score: {score}</p>
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        style={{ border: '2px solid #222', background: '#f8f9fa' }}
      />
      {gameOver && (
        <div className="mt-3">
          <h4>Game Over!</h4>
          <button className="btn btn-success" onClick={handleRestart}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default SnakeGame; 