import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Form, Input, Button, Typography } from "antd";

const { Title, Text } = Typography;
const { Password } = Input;

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = () => {
		console.log("Email:", email, "Password:", password);
		navigate("/dashboard");
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-700 px-4">
			<div className="bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md border-gray-700">
				<Title
					level={2}
					className="text-center !text-white !mb-2"
				>
					Admin Login
				</Title>
				<Text className="block text-center !text-white  mb-6">
					Log in to your account
				</Text>

				<Form
					layout="vertical"
					requiredMark={false}
					onFinish={handleSubmit}
				>
					<Form.Item
						label={<span className="text-gray-100">Email</span>}
						name="email"
						rules={[{ required: true, message: "Please enter your email!" }]}
					>
						<Input
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="rounded-md bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500 focus:border-cyan-600 focus:shadow-none"
						/>
					</Form.Item>

					<Form.Item
						label={<span className="text-gray-300">Password</span>}
						name="password"
						rules={[{ required: true, message: "Please enter your password!" }]}
					>
						<Password
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="rounded-md bg-gray-800 ] border-gray-700 text-gray-200 placeholder-gray-500 focus:border-cyan-600 focus:shadow-none"
						/>
					</Form.Item>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							block
							className="!bg-cyan-700 hover:!bg-cyan-800 !text-white !font-medium rounded-md !h-10"
						>
							Log In
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default Login;
