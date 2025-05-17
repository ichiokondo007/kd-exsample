import React, { useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { TOP,TOPPATH,loginsessionName,LoginInfo } from "../lib/commonType";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const logininfo:LoginInfo = {username: "", backgroundColor: ""};

  useEffect(() => {
    // ランダム背景色設定
    const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#4338ca"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const str = email;
    const atIndex = str.indexOf("@");
    logininfo.username = str.substring(0, atIndex);
    logininfo.backgroundColor = backgroundColor;

    sessionStorage.setItem(loginsessionName, JSON.stringify(logininfo));
    navigate(TOPPATH);
    // window.location.href = "/top";
  };

  return (
    <div className="body-bg min-h-screen flex items-center justify-center bg-gray-300">
      <div className="skewedAnime" ></div>

      <header className="relative z-10 mt-0"></header>
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 relative z-11 login-form">
        <div
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20"
          style={{
            width: "90px",
            height: "90px",
            backgroundColor: backgroundColor,
            borderRadius: "50%", // 丸くする
            overflow: "hidden",
            boxShadow: "0 10px 15px rgba(1, 1, 0.4, 0.4)", // 影
          }}
        >
          <img
            src="/avater_white_fill.svg"
            alt="Avatar"
            style={{
              width: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="pt-10">
          <h2 className="text-2xl text-gray-899 text-center">KD-Lab Sign In</h2>
          <form className="space-y-4 mt-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
            <button
              type="submit"
              className={`w-full bg-indigo-600 text-white font-medium py-2.5 rounded-lg transition-colors ${email ? "hover:bg-indigo-700" : "opacity-50 cursor-not-allowed"
                }`}
              disabled={!email} // Email が空の場合はボタンを無効化
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?
            <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;