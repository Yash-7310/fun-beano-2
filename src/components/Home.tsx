// "use client";

// import React from "react";
// import { Button } from ".././components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from ".././components/ui/card";
// import { Badge } from ".././components/ui/badge";
// import {
//   MapPin,
//   Star,
//   Users,
//   Shield,
//   Heart,
//   Clock,
//   CheckCircle,
//   MoveRight,
// } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { HeroSection } from "@/components/HeroSection";
// import PopularCities from "@/components/PopularCities";
// import AboutNumerics from "@/components/AboutNumerics";
// import { useWishlist } from "@/context/WishlistContext";
// import Image from "next/image";
// import { featuredPlayhouses, parentTestimonials, safetyFeatures } from "../data/homeData";

// export default function Home() {
//   const router = useRouter();
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <HeroSection />

//       {/* Popular cities section */}
//       <PopularCities />

//       {/* Parent Testimonials - More Emotional */}
//       <section className="mt-8 sm:mt-24 py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 flex items-center justify-center flex-col">
//             <Image
//               width="300"
//               height={300}
//               src="/TestinomialFoxImage.png"
//               alt="testimonial fox image"
//               className="w-[300] h-auto"
//             />
//             <h2 className="text-3xl mb-6 quicksand-bold text-[#FF0000]">
//               BEANO delivering Happy stories from Happy families
//             </h2>
//             <p className="text-base text-warm-gray max-w-4xl mx-auto quicksand-bold ">
//               See how our playzones have transformed children&apos;s lives and
//               given parents the confidence they need
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {parentTestimonials.map((testimonial) => (
//               <Card
//                 key={testimonial.id}
//                 className="hover:shadow-playful transition-all transform hover:scale-105 rounded-3xl border-2 border-green-500 hover:shadow-md overflow-hidden"
//               >
//                 <CardContent className="p-8">
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="flex items-center space-x-4">
//                       <Image
//                         width={16}
//                         height={16}
//                         src={testimonial.image}
//                         alt={testimonial.parent}
//                         className="w-16 h-16 rounded-full border-3  border-2 border-[#FED7A5]"
//                       />
//                       <div>
//                         <h4 className="font-bold text-xl text-charcoal quicksand-bold">
//                           {testimonial.parent}
//                         </h4>
//                         <p className="text-warm-gray text-sm quicksand-medium">
//                           {testimonial.role}
//                         </p>
//                         <div className="flex items-center mt-1">
//                           {[...Array(5)].map((_, i) => (
//                             <Star
//                               key={i}
//                               className="w-4 h-4 text-primary fill-current"
//                             />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <div className="text-lg font-bold text-charcoal mb-3 quicksand-bold">
//                       {testimonial.child}
//                     </div>
//                   </div>

//                   <blockquote className="text-charcoal text-sm leading-relaxed mb-4 mt-24 quicksand-medium">
//                     &quot;{testimonial.quote}&quot;
//                   </blockquote>

//                   <div className="flex items-center justify-between">
//                     <Badge
//                       variant="outline"
//                       className="border-primary rounded-full text-xs text-primary quicksand-bold"
//                     >
//                       <MapPin className="w-3 h-3 mr-1" />
//                       {testimonial.location}
//                     </Badge>
//                     {testimonial.videoTestimonial && (
//                       <Badge className="bg-secondary rounded-full text-white quicksand-bold text-xs">
//                         Video Story Available
//                       </Badge>
//                     )}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               className="hover:scale-105 text-black py-6 w-full max-w-sm flex justify-around mx-auto rounded-full text-base bg-primary quicksand-bold"
//               onClick={() => router.push("/listings")}
//             >
//               Start Your Child&apos;s Journey Today
//               <MoveRight size={48} />
//             </Button>
//           </div>
//         </div>
//       </section>

//       <div className="bg-white">
//         <Image
//           width={200}
//           height={200}
//           src="/FoxImageAboveSafety.png"
//           alt="fox image"
//           className="w-[100] sm:w-[200] h-auto ml-[60%] sm:ml-[80%]"
//         />
//       </div>

//       <section className="py-20 bg-[#FF8000]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <Image
//               width={250}
//               height={200}
//               src="/safetyMainFox.png"
//               alt="fox image"
//               className="mx-auto w-[250] h-auto"
//             />
//             <h2 className="text-3xl mb-4 quicksand-bold text-white">
//               All Beano endorsed playzones Guarantee
//             </h2>
//             <p className="text-base mx-auto quicksand-bold text-white">
//               As a parent, you need to know your child is safe. Here&apos;s
//               exactly how we ensure it.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {safetyFeatures.map((feature, index) => {
//               return (
//                 <Card
//                   key={index}
//                   className="text-center hover:shadow-playful transition-all transform hover:scale-105 rounded-3xl border-2 border-vibrant-green/30 overflow-hidden"
//                 >
//                   <div className="relative">
//                     <Image
//                       width={100}
//                       height={0}
//                       src={feature.image}
//                       alt={feature.title}
//                       className="w-full h-48 object-cover"
//                     />
//                   </div>
//                   <CardContent className="p-6">
//                     <h3 className="text-2xl text-left quicksand-bold mb-3 text-charcoal">
//                       {feature.title}
//                     </h3>
//                     <p className="text-charcoal text-left quicksand-medium text-base leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <Image
//               width={300}
//               height={0}
//               src="/Funbeano-logo-3.png"
//               alt="fun beano image with chain"
//               className="w-[300] h-auto mx-auto"
//             />
//             <h2 className="text-3xl mb-4 quicksand-bold text-green-500">
//               Beano Endorsed Playzones
//             </h2>
//             <p className="text-base relative quicksand-bold gap-2">
//               Beano loved your chipmunks and will{" "}
//               <span className="text-secondary text-xl">NOT</span> compromise on
//               their
//               <span className="text-orange-500 text-xl"> FUN</span>, so he makes
//               it a point that every playzone listed is{" "}
//               <span className="text-emerald-500 flex items-center absolute left-[50%] translate-x-[-50%] gap-2 text-xl">
//                 BEANO CERTIFIED{" "}
//                 <Image
//                   width={4}
//                   height={0}
//                   src="/check.png"
//                   alt="certified mark"
//                   className="w-4 h-4"
//                 />
//               </span>{" "}
//             </p>
//           </div>

//           <div className="grid sm-12 sm:mt-24 md:grid-cols-3 gap-10">
//             {featuredPlayhouses.map((playhouse) => (
//               <Card
//                 key={playhouse.id}
//                 className="cursor-pointer hover:shadow-playful transition-all transform hover:scale-105 overflow-hidden border-2 border-green-500 rounded-3xl"
//                 onClick={() => router.push(`/playhouse/${playhouse.id}`)}
//               >
//                 <div className="relative">
//                   <Image
//                     width={100}
//                     height={0}
//                     src={playhouse.image}
//                     alt={playhouse.name}
//                     className="w-full h-64 object-cover"
//                   />
//                   <div className="absolute pl-12 top-4 left-28 bg-secondary text-white px-4 py-3 rounded-full  flex items-center shadow-lg">
//                     <Users className="w-4 h-4 mr-1" />
//                     <span className="quicksand-bold text-xs text-white">
//                       {playhouse.liveViewers} Live
//                     </span>
//                   </div>
//                   <div className="absolute top-4 left-4 bg-primary text-charcoal px-4 py-2 rounded-full ">
//                     <span className="quicksand-bold text-xs">
//                       Parents Favourite
//                     </span>
//                   </div>
//                   <div className="absolute top-4 right-4 text-charcoal px-4 py-2 rounded-2xl ">
//                     <Button
//                       size="sm"
//                       variant="secondary"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         if (isInWishlist(playhouse.id)) {
//                           removeFromWishlist(playhouse.id);
//                         } else {
//                           console.log(playhouse);
//                           addToWishlist({
//                             id: playhouse.id,
//                             name: playhouse.name,
//                             location: playhouse.location,
//                             city: playhouse.city,
//                             rating: playhouse.rating,
//                             price: playhouse.price,
//                             image: playhouse.image,
//                             liveViewers: playhouse.liveViewers,
//                             features: playhouse.features,
//                             ageRange: playhouse.ageRange,
//                             distance: playhouse.distance,
//                           });
//                         }
//                       }}
//                     >
//                       <Heart
//                         className={`w-4 h-4  ${
//                           isInWishlist(playhouse.id)
//                             ? "text-white fill-current"
//                             : ""
//                         }`}
//                       />
//                     </Button>
//                   </div>
//                 </div>

//                 <CardHeader className="p-6">
//                   <CardTitle className="flex items-center justify-between text-2xl quicksand-bold">
//                     {playhouse.name}
//                   </CardTitle>
//                   <CardDescription className="flex items-center text-warm-gray text-base quicksand-medium">
//                     <MapPin className="w-5 h-5 mr-2" />
//                     {playhouse.location}
//                   </CardDescription>
//                   <div className="text-[#9C27B0] quicksand-bold mt-4 ">
//                     Perfect for ages {playhouse.ageRange}
//                   </div>
//                 </CardHeader>
//                 <CardContent className="p-6 pt-0">
//                   {/* Learning Benefits */}
//                   <div className="mb-4">
//                     <h4 className="text-base text-charcoal quicksand-bold mb-2">
//                       Your Child Will Learn:
//                     </h4>
//                     <div className="flex flex-wrap gap-2">
//                       {playhouse.learningBenefits.map((benefit) => (
//                         <Badge
//                           key={benefit}
//                           className="bg-[#E7F6FE] border border-[#45C6FF] text-charcoal rounded-full text-[10] quicksand-semibold"
//                         >
//                           {benefit}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Safety Features */}
//                   <div className="mb-6">
//                     <h4 className="text-base quicksand-bold text-charcoal mb-2">
//                       Safety Features:
//                     </h4>
//                     <div className="flex flex-wrap gap-2">
//                       {playhouse.features.map((feature) => (
//                         <Badge
//                           key={feature}
//                           className="bg-green-50 border border-green-500 text-charcoal text-[10] rounded-full quicksand-semibold"
//                         >
//                           {feature}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>

//                   <div className=" flex items-center justify-between">
//                     <div>
//                       <span className="text-3xl font-bold text-primary">
//                         ₹{playhouse.price}
//                       </span>
//                       <span className="text-warm-gray ml-2 quicksand-semibold">
//                         / child
//                       </span>
//                     </div>
//                     <Button className="bg-transparent hover:scale-105 text-charcoal text-base px-6 py-3 quicksand-bold ">
//                       Visit & Learn More
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               className="hover:scale-105 text-black py-6 w-full max-w-sm flex justify-around mx-auto rounded-full text-base bg-primary quicksand-bold"
//               onClick={() => router.push("/listings")}
//             >
//               Explore All trusted Playzones
//               <MoveRight strokeWidth={2} />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* About data in numerics */}
//       <AboutNumerics />

//       <div className="h-28 bg-white" />
//     </div>
//   );
// }
