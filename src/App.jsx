import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const App = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(12);
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const generatePassword = () => {
        let characters = "";
        if (includeUpper) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLower) characters += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) characters += "0123456789";
        if (includeSymbols) characters += "!@#$%^&*()_+-=[]{}|;:,.<>?";

        if (characters.length === 0) return;

        let newPassword = "";
        for (let i = 0; i < length; i++) {
            newPassword += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }
        setPassword(newPassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert("Password copied!");
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold my-6">Password Generator</h1>

            <br></br>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-96 space-y-6">
                {/* Password Display */}
                <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                    <input
                        type="text"
                        value={password}
                        readOnly
                        className="bg-transparent w-full text-lg outline-none tracking-widest"
                        style={{
                            width: '80%',
                            height: '25px',
                            padding: '10px',
                            fontSize: '18px',
                            borderWidth: '1px',
                            borderColor: 'gray',
                            borderRadius: '5px'
                          }}
                        
                    />

                    &emsp;

                    <FaRegCopy
                        onClick={copyToClipboard}
                        className="cursor-pointer text-xl hover:text-green-400 transition"
                    />
                </div>

                <br></br>

                {/* Length Slider */}
                <div className="space-y-2">
                  <div className="space-y-2">
                    <label className="block font-semibold">Length: {length}</label>
                    <input
                        type="range"
                        min="6"
                        max="32"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="w-full cursor-pointer"
                    />
                    </div>
                </div>

                <br></br>

                {/* Checkbox Options */}
                <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={includeUpper}
                            onChange={() => setIncludeUpper(!includeUpper)}
                            className="accent-gray-500"
                        />
                        <span> Uppercase</span>
                    </label>

                    &emsp;

                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={includeLower}
                            onChange={() => setIncludeLower(!includeLower)}
                            className="accent-gray-500"
                        />
                        <span> Lowercase</span>
                    </label>

                    &emsp;

                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={() => setIncludeNumbers(!includeNumbers)}
                            className="accent-gray-500"
                        />
                        <span> Numbers</span>
                    </label>

                    &emsp;

                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={includeSymbols}
                            onChange={() => setIncludeSymbols(!includeSymbols)}
                            className="accent-gray-500"
                        />
                        <span> Symbols</span>
                    </label>
                </div>

                <br></br>

                {/* Generate Button */}
                <button
                    onClick={generatePassword}
                    className="generate-btn">
                    Generate Password
                </button>
            </div>
        </div>
    );
};

export default App;
