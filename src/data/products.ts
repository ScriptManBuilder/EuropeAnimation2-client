// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string; // Optional video preview
  videos?: string[]; // Multiple course videos for premium courses
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Используем animation изображения для всех курсов
  return `/images/animation_${Math.min(productId, 8)}.jpg`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  // Для всех курсов используем animation изображения
  return [getProductImage(productId)];
};

// Helper function to get course video preview
export const getProductVideo = (productId: number): string | undefined => {
  if (productId === 1) {
    return "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (1).mp4";
  }
  if (productId === 2) {
    return "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (2).mp4";
  }
  if (productId === 3) {
    return "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (3).mp4";
  }
  if (productId === 4) {
    return "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (4).mp4";
  }
  if (productId === 5) {
    return "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (5).mp4";
  }
  if (productId === 6) {
    return "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (7).mp4";
  }
  if (productId === 7) {
    return "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (8).mp4";
  }
  if (productId === 8) {
    return "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (9).mp4";
  }
  if (productId === 9) {
    return "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (10).mp4";
  }
  if (productId === 10) {
    return "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (11).mp4";
  }
  if (productId === 11) {
    return "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (12).mp4";
  }
  return undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  // Courses 5-7: 2 videos each
  if (productId === 5) {
    return [
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (13).mp4",
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (14).mp4"
    ];
  }
  if (productId === 6) {
    return [
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (15).mp4",
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (16).mp4"
    ];
  }
  if (productId === 7) {
    return [
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (17).mp4",
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (18).mp4"
    ];
  }
  
  // Courses 8-10: 3 videos each
  if (productId === 8) {
    return [
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (19).mp4",
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (23).mp4",
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (24).mp4"
    ];
  }
  if (productId === 9) {
    return [
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (1).mp4",
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (2).mp4",
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (3).mp4"
    ];
  }
  if (productId === 10) {
    return [
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (4).mp4",
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (5).mp4",
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (7).mp4"
    ];
  }
  
  // Course 11: 4 videos
  if (productId === 11) {
    return [
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (8).mp4",
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (9).mp4",
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (10).mp4",
      "/videos/Maya for Beginners Animation Lucas Ridley Skillshare (11).mp4"
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Maya Animation Fundamentals",
    price: 6.99,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    description: "Introduction to Maya animation software with download options and basic setup guidance.",
    detailedDescription: "Master the fundamentals of Maya animation software. Learn how to download Maya with 4 different options, understand the basic interface, and get started with your animation journey. Perfect foundation for aspiring 3D animators.",
    category: "Animation Basics",
    features: [
      "Maya download tutorial (4 options)",
      "Software installation guide",
      "Basic Maya introduction",
      "Animation fundamentals",
      "Getting started techniques"
    ],
    specifications: {
      "Duration": "15 minutes",
      "Level": "Complete Beginner",
      "Language": "English",
      "Software": "Maya 3D",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Maya Interface & Navigation Mastery",
    price: 9.99,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    description: "Master Maya's interface, navigation tools, and essential workspace setup for efficient animation workflow.",
    detailedDescription: "Deep dive into Maya's interface with comprehensive training on navigation, workspace customization, and essential tools. Learn to efficiently navigate the Maya environment and set up your workspace for professional animation production.",
    category: "Maya Interface",
    features: [
      "Complete interface walkthrough",
      "Navigation tools mastery",
      "Workspace customization",
      "Essential tool overview",
      "Professional setup guide"
    ],
    specifications: {
      "Duration": "12 minutes 26 seconds",
      "Level": "Beginner",
      "Software": "Maya 3D",
      "Topics": "Interface, navigation, workspace",
      "Access": "8 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Maya Manipulators & Camera Movement",
    price: 19.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    description: "Learn Maya's manipulator tools and camera movement techniques for precise 3D navigation and object control.",
    detailedDescription: "Master Maya's manipulator tools and camera movement with comprehensive training on 3D navigation, object manipulation, and viewport control. Learn professional techniques for efficient 3D workflow and precise object positioning.",
    category: "Maya Tools",
    features: [
      "Manipulator tools mastery",
      "Camera movement techniques",
      "3D navigation skills",
      "Viewport control methods",
      "Object positioning precision"
    ],
    specifications: {
      "Duration": "10 minutes 51 seconds",
      "Level": "Beginner",
      "Software": "Maya 3D",
      "Tools": "Manipulators, cameras, navigation",
      "Access": "10 months",
      "Bonus": "Camera movement reference guide"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Bouncing Ball Animation Fundamentals",
    price: 29.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    description: "Master the classic bouncing ball animation - the foundation of all animation principles and timing.",
    detailedDescription: "Learn the essential bouncing ball animation technique that forms the foundation of all animation principles. Master timing, spacing, and the fundamental physics of animation through this classic exercise used by professional animators worldwide.",
    category: "Animation Fundamentals",
    features: [
      "Classic bouncing ball technique",
      "Animation timing principles",
      "Physics-based animation",
      "Keyframe fundamentals",
      "Professional animation workflow"
    ],
    specifications: {
      "Duration": "10 minutes 4 seconds",
      "Level": "Intermediate",
      "Animation": "Bouncing ball, timing, physics",
      "Techniques": "Keyframing, timing, spacing",
      "Access": "8 months",
      "Bonus": "Animation principles reference"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Maya Graph Editor Mastery",
    price: 39.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    videos: getProductVideos(5),
    description: "Master Maya's Graph Editor for precise animation control and professional curve editing techniques.",
    detailedDescription: "Master the powerful Graph Editor in Maya with comprehensive training. This course includes 2 detailed video modules covering graph editor navigation, curve editing, and professional animation refinement techniques used by industry animators.",
    category: "Animation Tools",
    features: [
      "2 comprehensive video modules",
      "Graph Editor navigation mastery",
      "Animation curve editing",
      "Professional refinement techniques",
      "Industry-standard workflows",
      "Ball exercise completion"
    ],
    specifications: {
      "Duration": "23 minutes 48 seconds",
      "Videos": "2 comprehensive modules",
      "Level": "Advanced",
      "Tools": "Graph Editor, curve manipulation",
      "Projects": "Ball animation exercises",
      "Access": "10 months",
      "Bonus": "Graph Editor reference guide"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Squash & Stretch Animation Principles",
    price: 49.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    videos: getProductVideos(6),
    description: "Learn the fundamental squash and stretch principle - essential for bringing life to your animations.",
    detailedDescription: "Master the squash and stretch animation principle with comprehensive training. This course includes 2 detailed video modules covering squash and stretch techniques, animation scene setup, and professional character animation applications.",
    category: "Animation Principles",
    features: [
      "2 detailed video modules",
      "Squash & stretch mastery",
      "Animation scene setup",
      "Character animation principles",
      "Professional techniques",
      "Ball exercise refinement"
    ],
    specifications: {
      "Duration": "13 minutes 37 seconds",
      "Videos": "2 detailed modules",
      "Level": "Intermediate",
      "Principles": "Squash, stretch, scene setup",
      "Applications": "Character animation, object deformation",
      "Access": "12 months",
      "Support": "Animation principles guide"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Follow Through & Overlapping Action",
    price: 59.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    videos: getProductVideos(7),
    description: "Master follow through and overlapping action principles for realistic and dynamic character animation.",
    detailedDescription: "Master advanced animation principles with comprehensive follow through training. This course includes 2 comprehensive video modules covering follow through techniques, overlapping action, and antics contrast for professional character animation.",
    category: "Advanced Animation",
    features: [
      "2 comprehensive video modules",
      "Follow through mastery",
      "Overlapping action techniques",
      "Antics and contrast principles",
      "Character animation polish",
      "Professional workflows"
    ],
    specifications: {
      "Duration": "44 minutes 20 seconds",
      "Videos": "2 comprehensive modules",
      "Level": "Intermediate",
      "Principles": "Follow through, overlapping action, antics",
      "Applications": "Character animation, dynamic movement",
      "Access": "12 months",
      "Bonus": "Animation principles reference"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Walk Cycle Animation Fundamentals",
    price: 69.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    videos: getProductVideos(8),
    description: "Master walk cycle animation with comprehensive training on constraints, referenced rigs, and cycle setup.",
    detailedDescription: "Master walk cycle animation with comprehensive training. This course includes 3 detailed video modules covering constraints, referenced rigs, walk cycle fundamentals, and mirror key techniques for professional character locomotion.",
    category: "Character Animation",
    features: [
      "3 detailed video modules",
      "Walk cycle fundamentals",
      "Constraints and rigging",
      "Referenced rig workflows",
      "Mirror key techniques",
      "Character locomotion mastery"
    ],
    specifications: {
      "Duration": "27 minutes 16 seconds",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Animation": "Walk cycles, constraints, rigs",
      "Techniques": "Character locomotion, rigging",
      "Access": "12 months",
      "Bonus": "Walk cycle reference library"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Advanced Walk Cycle & Body Mechanics",
    price: 79.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Master advanced walk cycle techniques with lower body, upper body animation, and professional polish methods.",
    detailedDescription: "Master advanced walk cycle animation with comprehensive body mechanics training. This premium course includes 3 comprehensive video modules covering lower body animation, upper body dynamics, and professional walk cycle polish techniques.",
    category: "Advanced Character Animation",
    features: [
      "3 comprehensive video modules",
      "Lower body animation mastery",
      "Upper body dynamics",
      "Walk cycle breakdowns",
      "Professional polish techniques",
      "Body mechanics principles"
    ],
    specifications: {
      "Duration": "38 minutes 42 seconds",
      "Videos": "3 comprehensive modules",
      "Level": "Advanced",
      "Animation": "Body mechanics, walk cycles, dynamics",
      "Focus": "Lower/upper body, professional polish",
      "Access": "15 months",
      "Bonus": "Body mechanics reference collection"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Walk Cycle Polish & Motion Paths",
    price: 89.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Master walk cycle polish techniques, motion trails, and motion path animation for cinematic character movement.",
    detailedDescription: "Master professional walk cycle polish with comprehensive motion path training. This premium course includes 3 detailed video modules covering walk cycle offsets, motion trail techniques, and advanced motion path animation for cinematic results.",
    category: "Professional Animation",
    features: [
      "3 detailed video modules",
      "Walk cycle offset techniques",
      "Motion trail wrist animation",
      "Motion path mastery",
      "Professional polish methods",
      "Cinematic movement techniques"
    ],
    specifications: {
      "Duration": "44 minutes 49 seconds",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Animation": "Motion paths, trails, polish",
      "Features": "Professional workflows, cinematic movement",
      "Access": "15 months",
      "Bonus": "Motion path animation toolkit"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Complete Maya Animation Mastery",
    price: 99.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Master all aspects of Maya animation with complete training covering every technique from basics to professional workflows.",
    detailedDescription: "Achieve Maya animation mastery with complete comprehensive training. This premium course includes 4 comprehensive video modules covering all animation principles, advanced techniques, professional workflows, and industry-standard practices used by animation studios worldwide.",
    category: "Complete Mastery",
    features: [
      "4 comprehensive video modules",
      "Complete Maya animation mastery",
      "All animation principles covered",
      "Professional studio workflows",
      "Industry-standard techniques",
      "Advanced character animation"
    ],
    specifications: {
      "Duration": "1 hour 15 minutes",
      "Videos": "4 comprehensive modules",
      "Level": "Expert",
      "Coverage": "All animation principles, professional workflows",
      "Skills": "Complete Maya animation mastery",
      "Access": "18 months",
      "Bonus": "Complete Maya animation toolkit & references"
    },
    inStock: true
  }
];