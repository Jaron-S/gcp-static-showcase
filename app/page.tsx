import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ArrowRight,
	BarChart3,
	Cloud,
	ExternalLink,
	Eye,
	FileText,
	Github,
	Globe,
	Linkedin,
	Lock,
	Server,
	Shield,
	Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
			{/* Navigation */}
			<nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-50">
				<div className="container mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<Cloud className="h-8 w-8 text-blue-400" />
							<span className="text-xl font-bold text-white">
								GCP Static Showcase
							</span>
						</div>
						<div className="hidden md:flex space-x-6">
							<a
								href="#overview"
								className="text-slate-300 hover:text-blue-400 transition-colors"
							>
								Overview
							</a>
							<a
								href="#architecture"
								className="text-slate-300 hover:text-blue-400 transition-colors"
							>
								Architecture
							</a>
							<a
								href="#services"
								className="text-slate-300 hover:text-blue-400 transition-colors"
							>
								Services
							</a>
							<a
								href="#benefits"
								className="text-slate-300 hover:text-blue-400 transition-colors"
							>
								Benefits
							</a>
							{/* <a
								href="#monitoring"
								className="text-slate-300 hover:text-blue-400 transition-colors"
							>
								Monitoring
							</a> */}
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="pt-24 pb-12 px-6">
				<div className="container mx-auto text-center">
					<div className="max-w-4xl mx-auto">
						<Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
							Live Demo
						</Badge>
						<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
							Experience Speed & Security
							<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
								Built on GCP
							</span>
						</h1>
						<p className="text-xl text-slate-300 mb-8 leading-relaxed">
							Welcome to a live demonstration of a production-ready static
							website hosted on Google Cloud Platform. This site showcases best
							practices for security, performance, and cost-efficiency in cloud
							architecture.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href={"#architecture"}>
								<Button
									size="lg"
									className="bg-blue-600 hover:bg-blue-700 text-white"
								>
									Explore the Architecture
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</Link>
							<Button
								size="lg"
								variant="outline"
								className="border-slate-600 text-slate-800 hover:bg-slate-800 hover:text-slate-200"
							>
								View Source Code
								<Github className="ml-2 h-5 w-5" />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Project Overview */}
			<section id="overview" className="py-16 px-6">
				<div className="container mx-auto">
					<div className="max-w-3xl mx-auto text-center mb-12">
						<h2 className="text-4xl font-bold text-white mb-6">
							Project Overview
						</h2>
						<p className="text-lg text-slate-300 leading-relaxed">
							This website serves as both a project and its own demonstration.
							It showcases how to deploy a secure, fast, and cost-efficient
							static website using specific Google Cloud Platform services.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
						<Card className="bg-slate-800/50 border-slate-700">
							<CardHeader>
								<CardTitle className="text-white flex items-center">
									<Zap className="mr-2 h-6 w-6 text-yellow-400" />
									Purpose
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-slate-300">
									Demonstrate modern cloud hosting best practices by building a
									production-ready static site that emphasizes security,
									performance, and operational excellence using GCP services.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-slate-800/50 border-slate-700">
							<CardHeader>
								<CardTitle className="text-white flex items-center">
									<Server className="mr-2 h-6 w-6 text-blue-400" />
									Key Technologies
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-2">
									<Badge
										variant="secondary"
										className="bg-blue-500/20 text-blue-300"
									>
										Cloud Storage
									</Badge>
									<Badge
										variant="secondary"
										className="bg-blue-500/20 text-blue-300"
									>
										Cloud CDN
									</Badge>
									<Badge
										variant="secondary"
										className="bg-blue-500/20 text-blue-300"
									>
										Load Balancer
									</Badge>
									<Badge
										variant="secondary"
										className="bg-blue-500/20 text-blue-300"
									>
										Cloud Armor
									</Badge>
									<Badge
										variant="secondary"
										className="bg-blue-500/20 text-blue-300"
									>
										SSL Certificate
									</Badge>
									<Badge
										variant="secondary"
										className="bg-blue-500/20 text-blue-300"
									>
										Monitoring
									</Badge>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Architecture Deep Dive */}
			<section id="architecture" className="py-16 px-6 bg-slate-900/50">
				<div className="container mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-white mb-6">
							Architecture Deep Dive
						</h2>
						<p className="text-lg text-slate-300 max-w-3xl mx-auto">
							Here's how the components work together to deliver a fast, secure,
							and reliable experience.
						</p>
					</div>

					{/* Architecture Diagram Placeholder */}
					<div className="mb-12">
						<Card className="bg-slate-800/50 border-slate-700">
							<CardHeader>
								<CardTitle className="text-white text-center">
									Request Flow Architecture
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="flex items-center justify-center">
									{/* <div className="text-center">
										<Globe className="h-16 w-16 text-blue-400 mx-auto mb-4" />
										<p className="text-slate-300 text-lg font-medium">
											Architecture Diagram
										</p>
										<p className="text-slate-400 text-sm">
											User → DNS → Load Balancer (SSL + Cloud Armor) → CDN →
											Storage
										</p>
									</div> */}
									<Image
										src={"/architecture.svg"}
										alt={"Architecture Diagram"}
										width={500}
										height={100}
									/>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Flow Explanation */}
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<Card className="bg-slate-800/50 border-slate-700">
							<CardHeader className="pb-4">
								<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-2">
									<FileText className="h-6 w-6 text-blue-400" />
								</div>
								<CardTitle className="text-white text-lg">
									Static Assets
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-slate-300 text-sm">
									HTML, CSS, JS, and images stored in a Google Cloud Storage
									bucket configured for web hosting.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-slate-800/50 border-slate-700">
							<CardHeader className="pb-4">
								<div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-2">
									<Globe className="h-6 w-6 text-green-400" />
								</div>
								<CardTitle className="text-white text-lg">Global CDN</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-slate-300 text-sm">
									Cloud CDN caches content globally, delivering assets from the
									nearest edge location for minimal latency.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-slate-800/50 border-slate-700">
							<CardHeader className="pb-4">
								<div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-2">
									<Lock className="h-6 w-6 text-purple-400" />
								</div>
								<CardTitle className="text-white text-lg">
									SSL & Security
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-slate-300 text-sm">
									HTTPS Load Balancer with Google-managed SSL certificates and
									Cloud Armor protection.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-slate-800/50 border-slate-700">
							<CardHeader className="pb-4">
								<div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-2">
									<Eye className="h-6 w-6 text-orange-400" />
								</div>
								<CardTitle className="text-white text-lg">
									Observability
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-slate-300 text-sm">
									Cloud Monitoring and Logging provide real-time insights into
									performance and security.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* GCP Services Breakdown */}
			<section id="services" className="py-16 px-6">
				<div className="container mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-white mb-6">
							GCP Services in Focus
						</h2>
						<p className="text-lg text-slate-300 max-w-3xl mx-auto">
							Each service plays a crucial role in delivering exceptional
							performance and security.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
							<CardHeader>
								<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-2">
									<Server className="h-6 w-6 text-blue-400" />
								</div>
								<CardTitle className="text-white">Cloud Storage</CardTitle>
								<CardDescription className="text-slate-400">
									Static Asset Hosting
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-slate-300 text-sm mb-4">
									Serves as the origin for all static files with high durability
									and availability. Configured with website hosting to handle
									index and error pages.
								</p>
								<Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
									99.999999999% Durability
								</Badge>
							</CardContent>
						</Card>

						<Card className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-colors">
							<CardHeader>
								<div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-2">
									<Globe className="h-6 w-6 text-green-400" />
								</div>
								<CardTitle className="text-white">Cloud CDN</CardTitle>
								<CardDescription className="text-slate-400">
									Global Content Delivery
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-slate-300 text-sm mb-4">
									Caches content across Google's global network of edge
									locations, reducing latency and improving user experience
									worldwide.
								</p>
								<Badge className="bg-green-500/20 text-green-300 border-green-500/30">
									100+ Edge Locations
								</Badge>
							</CardContent>
						</Card>

						<Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
							<CardHeader>
								<div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-2">
									<Shield className="h-6 w-6 text-purple-400" />
								</div>
								<CardTitle className="text-white">Cloud Armor</CardTitle>
								<CardDescription className="text-slate-400">
									DDoS & WAF Protection
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-slate-300 text-sm mb-4">
									Protects against DDoS attacks and common web exploits at the
									edge, before traffic reaches the origin servers.
								</p>
								<Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
									Edge Security
								</Badge>
							</CardContent>
						</Card>

						<Card className="bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-colors">
							<CardHeader>
								<div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-2">
									<Lock className="h-6 w-6 text-yellow-400" />
								</div>
								<CardTitle className="text-white">SSL Certificate</CardTitle>
								<CardDescription className="text-slate-400">
									Google-Managed HTTPS
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-slate-300 text-sm mb-4">
									Automatically provisioned and renewed SSL certificates ensure
									all traffic is encrypted and secure by default.
								</p>
								<Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
									Auto-Renewal
								</Badge>
							</CardContent>
						</Card>

						<Card className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-colors">
							<CardHeader>
								<div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-2">
									<BarChart3 className="h-6 w-6 text-orange-400" />
								</div>
								<CardTitle className="text-white">Cloud Monitoring</CardTitle>
								<CardDescription className="text-slate-400">
									Performance Insights
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-slate-300 text-sm mb-4">
									Real-time metrics and alerting for uptime, performance, and
									user experience monitoring across all services.
								</p>
								<Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
									99.9% SLA
								</Badge>
							</CardContent>
						</Card>

						<Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-colors">
							<CardHeader>
								<div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-2">
									<FileText className="h-6 w-6 text-cyan-400" />
								</div>
								<CardTitle className="text-white">Cloud Logging</CardTitle>
								<CardDescription className="text-slate-400">
									Centralized Log Management
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-slate-300 text-sm mb-4">
									Collects and analyzes logs from all components for debugging,
									security analysis, and compliance requirements.
								</p>
								<Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
									Structured Logs
								</Badge>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Benefits Showcase */}
			<section id="benefits" className="py-16 px-6 bg-slate-900/50">
				<div className="container mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-white mb-6">
							Benefits Showcase
						</h2>
						<p className="text-lg text-slate-300 max-w-3xl mx-auto">
							See how this architecture delivers exceptional results across key
							metrics.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
						<Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
							<CardHeader className="text-center">
								<Zap className="h-12 w-12 text-blue-400 mx-auto mb-2" />
								<CardTitle className="text-slate-700">Lightning Fast</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<div className="text-3xl font-bold text-blue-400 mb-2">
									{"<100ms"}
								</div>
								<p className="text-slate-700 text-sm">
									Average response time from CDN cache hits
								</p>
							</CardContent>
						</Card>

						<Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
							<CardHeader className="text-center">
								<Shield className="h-12 w-12 text-green-400 mx-auto mb-2" />
								<CardTitle className="text-slate-700">
									Secure by Default
								</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<div className="text-3xl font-bold text-green-400 mb-2">
									100%
								</div>
								<p className="text-slate-700 text-sm">
									HTTPS coverage with DDoS protection
								</p>
							</CardContent>
						</Card>

						<Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
							<CardHeader className="text-center">
								<Globe className="h-12 w-12 text-purple-400 mx-auto mb-2" />
								<CardTitle className="text-slate-700">Global Scale</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<div className="text-3xl font-bold text-purple-400 mb-2">
									≥99.95%
								</div>
								<p className="text-slate-700 text-sm">
									Uptime with automatic scaling
								</p>
							</CardContent>
						</Card>

						<Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/30">
							<CardHeader className="text-center">
								<BarChart3 className="h-12 w-12 text-orange-400 mx-auto mb-2" />
								<CardTitle className="text-slate-700">Cost Efficient</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<div className="text-3xl font-bold text-orange-400 mb-2">
									$0.08
								</div>
								<p className="text-slate-700 text-sm">
									Per GB of bandwidth with CDN
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-16 px-6 bg-slate-900/50">
				<div className="container mx-auto text-center">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-4xl font-bold text-white mb-6">
							About This Project
						</h2>
						<p className="text-lg text-slate-300 mb-8 leading-relaxed">
							This project was created to demonstrate real-world cloud
							architecture patterns and best practices. It showcases how modern
							web applications can leverage Google Cloud Platform services to
							achieve enterprise-grade security, performance, and reliability
							while maintaining cost efficiency.
						</p>
						<p className="text-slate-400 mb-8">
							Built with passion for cloud technology and a commitment to
							sharing knowledge with the developer community.
						</p>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-12 px-6 border-t border-slate-700">
				<div className="container mx-auto">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center space-x-2 mb-4 md:mb-0">
							<Cloud className="h-6 w-6 text-blue-400" />
							<span className="text-white font-semibold">
								GCP Static Showcase
							</span>
						</div>

						<div className="flex space-x-6">
							<Link href={"https://github.com/Jaron-S/gcp-static-showcase"}>
								<Button
									variant="ghost"
									size="sm"
									className="text-slate-300 hover:text-white"
								>
									<Github className="h-5 w-5 mr-2" />
									Learn More
								</Button>
							</Link>
							<Link href={"https://linkedin.com/in/jaron-s"}>
								<Button
									variant="ghost"
									size="sm"
									className="text-slate-300 hover:text-white"
								>
									<Linkedin className="h-5 w-5 mr-2" />
									LinkedIn
								</Button>
							</Link>
							<Link href={"https://jaron-s.com"}>
								<Button
									variant="ghost"
									size="sm"
									className="text-slate-300 hover:text-white"
								>
									<ExternalLink className="h-5 w-5 mr-2" />
									Portfolio
								</Button>
							</Link>
						</div>
					</div>

					<div className="border-t border-slate-700 mt-8 pt-8 text-center">
						<p className="text-slate-300 text-sm">
							© {new Date().getFullYear()} GCP Static Showcase. Created by Jaron
							Schoorlemmer, hosted on Google Cloud Platform.
						</p>
						<p className="text-slate-400 text-xs mt-2">
							This website is itself the demonstration of the architecture it
							describes.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
