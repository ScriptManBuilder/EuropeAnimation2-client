import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../styles/GlobalStyles';
import { products } from '../data/products';
import { usePrice } from '../hooks/usePrice';
import { RocketIcon, LightningIcon, ShieldIcon, GlobeIcon, TargetIcon, DiamondIcon } from '../components/FeatureIcons';
import LazyImage from '../components/LazyImage';
import { COMPANY_INFO, MEMBERSHIP_CONFIG } from '../config/constants';
import {
  HeroSection,
  HeroVideo,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  FeaturesSection,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  CarouselContainer,
  CarouselTrack,
  CarouselSlide,
  CarouselContent,
  CarouselTitle,
  CarouselSubtitle,
  CarouselDots,
  CarouselDot,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  ProductsSection,
  VideoSection,
  VideoSectionVideo,
  VideoSectionContent,
  VideoSectionTitle,
  VideoSectionSubtitle,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductContent,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  ProductButton,
  PremiumButton,
  ScrollReveal,
  ParallaxElement,
  PhotoGallerySection,
  PhotoStrip,
  PhotoItem,
  ScrollingTextBanner,
  ScrollingText,
  InfoSection,
  InfoGrid,
  InfoBlock,
  InfoTitle,
  InfoDescription,
  InfoSubsection,
  InfoSubtitle,
  InfoText,
  InfoHighlight,
  SubscriptionHighlight,
  SubscriptionCard,
  SubscriptionBadge,
  SubscriptionTitle,
  SubscriptionPriceBlock,
  PriceAmount,
  PricePeriod,
  SubscriptionFeatures,
  Feature,
  SubscriptionTerms
} from '../styles/pages/HomeStyles';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6);
  const { formatPrice } = usePrice();
  const scrollRevealRefs = useRef<(HTMLDivElement | null)[]>([]);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoSectionVisible, setIsVideoSectionVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  // Состояние для карусели
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Состояние для второй карусели (Featured Solutions)
  const [currentFeaturedSlide, setCurrentFeaturedSlide] = useState(0);
  const totalFeaturedSlides = 3;

  // Состояние для автоматического выделения карточек продуктов
  const [activeProductCard, setActiveProductCard] = useState(0);
  const totalProductCards = featuredProducts.length;

  // Данные для слайдов карусели
  const carouselSlides = [
    {
      title: "Why Choose Animation Academy?",
      subtitle: "Discover the excellence that makes our animation education exceptional"
    },
    {
      title: "Expert-Led Animation Training",
      subtitle: "Learn from industry professionals with real-world animation and motion design experience"
    },
    {
      title: "Innovation Meets Animation",
      subtitle: "Where cutting-edge animation techniques meet practical application"
    }
  ];

  // Данные для слайдов Featured Solutions
  const featuredSlides = [
    {
      title: "Featured Animation Courses",
      subtitle: "Discover our most popular and effective animation training programs"
    },
    {
      title: "Revolutionary Learning",
      subtitle: "Next-generation animation education that transforms careers"
    },
    {
      title: "Premium Animation Education",
      subtitle: "Crafted for those who demand excellence in animation mastery"
    }
  ];

  // Мемоизируем массив изображений для галереи
  const galleryImages = useMemo(() => {
    // Новые анимационные изображения для галереи
    const allImages = [
      { src: `/images/animation_1.jpg`, alt: `Animation Portfolio 1`, type: 'animation-portfolio' },
      { src: `/images/animation_2.jpg`, alt: `Animation Portfolio 2`, type: 'animation-portfolio' },
      { src: `/images/animation_3.jpg`, alt: `Animation Portfolio 3`, type: 'animation-portfolio' },
      { src: `/images/animation_4.jpg`, alt: `Animation Portfolio 4`, type: 'animation-portfolio' },
      { src: `/images/animation_5.jpg`, alt: `Animation Portfolio 5`, type: 'animation-portfolio' },
      { src: `/images/animation_6.jpg`, alt: `Animation Portfolio 6`, type: 'animation-portfolio' },
      { src: `/images/animation_7.jpg`, alt: `Animation Portfolio 7`, type: 'animation-portfolio' },
      { src: `/images/animation_8.jpg`, alt: `Animation Portfolio 8`, type: 'animation-portfolio' },
      { src: `/images/ribbon_1_animation.jpg`, alt: `Animation Ribbon 1`, type: 'animation-ribbon' },
      { src: `/images/ribbon_2_animation.jpg`, alt: `Animation Ribbon 2`, type: 'animation-ribbon' }
    ];
    
    // Перемешиваем для разнообразия и добавляем id
    return allImages
      .sort(() => Math.random() - 0.5)
      .map((img, index) => ({
        id: index,
        src: img.src,
        alt: img.alt,
        type: img.type
      }));
  }, []);

  // Мемоизируем текст для бегущей строки
  const scrollingTexts = useMemo(() => [
    'MASTER DIGITAL ANIMATION TODAY',
    'FOLLOW US @ANIMATION_LEARN_ACADEMY',
    'PREMIUM ANIMATION EDUCATION COURSES',
    'TRANSFORM YOUR CAREER WITH ANIMATION',
    'MOTION DESIGN & CHARACTER ANIMATION',
    'JOIN THE ANIMATION REVOLUTION NOW'
  ], []);

  useEffect(() => {
    // Intersection Observer для scroll reveal эффектов
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Наблюдаем за всеми элементами с scroll reveal
    scrollRevealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Intersection Observer для галереи
    const galleryObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          galleryObserver.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    // Intersection Observer для новой видео секции
    const videoSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoSectionVisible(true);
          videoSectionObserver.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    if (galleryRef.current) {
      galleryObserver.observe(galleryRef.current);
    }

    if (videoSectionRef.current) {
      videoSectionObserver.observe(videoSectionRef.current);
    }

    // Parallax эффект при скролле (throttled)
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          parallaxRefs.current.forEach((ref, index) => {
            if (ref) {
              const speed = (index + 1) * 0.1;
              const yPos = -(scrollY * speed);
              ref.style.transform = `translateY(${yPos}px)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      galleryObserver.disconnect();
      videoSectionObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Автоматическое переключение слайдов каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Автоматическое переключение слайдов Featured Solutions каждые 5 секунд (со сдвигом)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedSlide(prev => (prev + 1) % totalFeaturedSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalFeaturedSlides]);

  // Автоматическое выделение карточек продуктов каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProductCard(prev => (prev + 1) % totalProductCards);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalProductCards]);

  // Функция для переключения на определенный слайд
  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Функция для переключения на определенный слайд Featured Solutions
  const goToFeaturedSlide = (slideIndex: number) => {
    setCurrentFeaturedSlide(slideIndex);
  };

  // Поддержка свайпов для мобильных устройств
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Свайп влево - следующий слайд
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    } else if (isRightSwipe) {
      // Свайп вправо - предыдущий слайд
      setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  // Поддержка свайпов для Featured Solutions карусели
  const [featuredTouchStart, setFeaturedTouchStart] = useState<number | null>(null);
  const [featuredTouchEnd, setFeaturedTouchEnd] = useState<number | null>(null);

  const onFeaturedTouchStart = (e: React.TouchEvent) => {
    setFeaturedTouchEnd(null);
    setFeaturedTouchStart(e.targetTouches[0].clientX);
  };

  const onFeaturedTouchMove = (e: React.TouchEvent) => {
    setFeaturedTouchEnd(e.targetTouches[0].clientX);
  };

  const onFeaturedTouchEnd = () => {
    if (!featuredTouchStart || !featuredTouchEnd) return;
    
    const distance = featuredTouchStart - featuredTouchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Свайп влево - следующий слайд
      setCurrentFeaturedSlide(prev => (prev + 1) % totalFeaturedSlides);
    } else if (isRightSwipe) {
      // Свайп вправо - предыдущий слайд
      setCurrentFeaturedSlide(prev => (prev - 1 + totalFeaturedSlides) % totalFeaturedSlides);
    }
  };

  const setScrollRevealRef = (index: number) => (el: HTMLDivElement | null) => {
    scrollRevealRefs.current[index] = el;
  };

  const setParallaxRef = (index: number) => (el: HTMLDivElement | null) => {
    parallaxRefs.current[index] = el;
  };

  return (
    <>
      <HeroSection>
        <HeroVideo 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
        >
          <source src="/videos/video_hero_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </HeroVideo>
        <Container>
          <HeroContent>
            <HeroTitle>ANIMATION LEARN</HeroTitle> 
            <HeroSubtitle>
              Master Animation & Motion Design with Expert-Led Video Courses - Transform Your Creative Career Today
            </HeroSubtitle>
            <HeroButtons>
              <Button as={Link} to="/products" variant="primary">
                Browse Courses
              </Button>
              <Button as={Link} to="/about" variant="outline">
                Our Mission
              </Button>
            </HeroButtons>
          </HeroContent>
        </Container>
      </HeroSection>

    

      <FeaturesSection>
        
        <Container>
          <ScrollReveal ref={setScrollRevealRef(0)}>
            {/* Карусель плашек */}
            <CarouselContainer
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <CarouselTrack currentSlide={currentSlide}>
                {carouselSlides.map((slide, index) => (
                  <CarouselSlide key={index}>
                    <CarouselContent>
                      <CarouselTitle>{slide.title}</CarouselTitle>
                      <CarouselSubtitle>{slide.subtitle}</CarouselSubtitle>
                    </CarouselContent>
                  </CarouselSlide>
                ))}
              </CarouselTrack>
            </CarouselContainer>
            
            {/* Навигационные точки */}
            <CarouselDots>
              {Array.from({ length: totalSlides }).map((_, index) => (
                <CarouselDot
                  key={index}
                  active={currentSlide === index}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </CarouselDots>
          </ScrollReveal>
          
          <FeaturesGrid>
            <ScrollReveal ref={setScrollRevealRef(1)} delay={100}>
              <FeatureCard>
                <RocketIcon />
                <FeatureTitle>Expert Animation Instruction</FeatureTitle>
                <FeatureDescription>
                  Learn from industry professionals with hands-on animation and motion design experience and proven track records.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(2)} delay={200}>
              <FeatureCard>
                <LightningIcon />
                <FeatureTitle>Instant Access Learning</FeatureTitle>
                <FeatureDescription>
                  Start learning immediately with lifetime access to all course materials and updates.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(3)} delay={300}>
              <FeatureCard>
                <ShieldIcon />
                <FeatureTitle>Certified Quality</FeatureTitle>
                <FeatureDescription>
                  Industry-recognized certificates and rigorous curriculum ensure professional standards.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(4)} delay={400}>
              <FeatureCard>
                <GlobeIcon />
                <FeatureTitle>Global Community</FeatureTitle>
                <FeatureDescription>
                  Join hundreds of animation enthusiasts worldwide with 24/7 support and community access.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(5)} delay={500}>
              <FeatureCard>
                <TargetIcon />
                <FeatureTitle>Practical Application</FeatureTitle>
                <FeatureDescription>
                  Real-world projects and case studies that you can apply immediately in your work.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(6)} delay={600}>
              <FeatureCard>
                <DiamondIcon />
                <FeatureTitle>Premium Content</FeatureTitle>
                <FeatureDescription>
                  Cutting-edge curriculum updated regularly with the latest animation developments and trends.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      {/* Новая независимая видео секция */}
      <VideoSection ref={videoSectionRef}>
        {isVideoSectionVisible && (
          <VideoSectionVideo 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="none"
          >
            <source src="/videos/videoAI_2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </VideoSectionVideo>
        )}
        <VideoSectionContent>
          <VideoSectionTitle>Animation Learning in Motion</VideoSectionTitle>
          <VideoSectionSubtitle>
            Experience the future of animation education through interactive learning and real-world applications
          </VideoSectionSubtitle>
        </VideoSectionContent>
      </VideoSection>

      <ProductsSection>
        <Container>
          <ScrollReveal ref={setScrollRevealRef(7)}>
            {/* Карусель Featured Solutions */}
            <CarouselContainer
              onTouchStart={onFeaturedTouchStart}
              onTouchMove={onFeaturedTouchMove}
              onTouchEnd={onFeaturedTouchEnd}
            >
              <CarouselTrack currentSlide={currentFeaturedSlide}>
                {featuredSlides.map((slide, index) => (
                  <CarouselSlide key={index}>
                    <CarouselContent>
                      <CarouselTitle>{slide.title}</CarouselTitle>
                      <CarouselSubtitle>{slide.subtitle}</CarouselSubtitle>
                    </CarouselContent>
                  </CarouselSlide>
                ))}
              </CarouselTrack>
            </CarouselContainer>
            
            {/* Навигационные точки для Featured Solutions */}
            <CarouselDots>
              {Array.from({ length: totalFeaturedSlides }).map((_, index) => (
                <CarouselDot
                  key={index}
                  active={currentFeaturedSlide === index}
                  onClick={() => goToFeaturedSlide(index)}
                />
              ))}
            </CarouselDots>
          </ScrollReveal>
          
          <ProductsGrid>
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} ref={setScrollRevealRef(8 + index)} delay={index * 100}>
                <ProductCard $isActive={activeProductCard === index}>
                  <ProductImage src={product.image} alt={product.name} />
                  <ProductInfo style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%',
                    padding: '20px' 
                  }}>
                    <ProductContent style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%'
                    }}>
                      <ProductTitle style={{ 
                        marginBottom: '12px',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        {product.name}
                      </ProductTitle>
                      
                      <ProductDescription style={{
                        height: '70px',
                        overflow: 'hidden',
                        marginBottom: '8px',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: '1.4'
                      }}>
                        {product.description.length > 100 
                          ? product.description.substring(0, 100) + '...'
                          : product.description
                        }
                      </ProductDescription>
                      
                      <div style={{
                        marginTop: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '5px'
                      }}>
                        <ProductButton 
                          as={Link} 
                          to={`/product/${product.id}`}
                          style={{
                            padding: '8px 16px',
                            minWidth: '110px',
                            textAlign: 'center',
                            fontSize: '0.85rem',
                            fontWeight: '500'
                          }}
                        >
                          Start Learning
                        </ProductButton>
                      </div>
                    </ProductContent>
                  </ProductInfo>
                </ProductCard>
              </ScrollReveal>
            ))}
          </ProductsGrid>
          
          <ScrollReveal ref={setScrollRevealRef(14)}>
            <div style={{ textAlign: 'center', marginTop: '80px' }}>
              <PremiumButton as={Link} to="/products">
                <span>
                  🎓 View All Courses
                </span>
              </PremiumButton>
            </div>
          </ScrollReveal>
        </Container>
      </ProductsSection>

      {/* Photo Gallery Section */}
      <PhotoGallerySection ref={galleryRef}>
        {isVisible && (
          <PhotoStrip>
            {/* Первый набор изображений */}
            {galleryImages.map((image) => (
              <PhotoItem key={`first-${image.id}`} className={`photo-${image.type}`}>
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                />
              </PhotoItem>
            ))}
            {/* Дублированный набор для бесконечной прокрутки */}
            {galleryImages.map((image) => (
              <PhotoItem key={`second-${image.id}`} className={`photo-${image.type}`}>
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                />
              </PhotoItem>
            ))}
            {/* Третий набор для полной бесконечности */}
            {galleryImages.map((image) => (
              <PhotoItem key={`third-${image.id}`} className={`photo-${image.type}`}>
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                />
              </PhotoItem>
            ))}
          </PhotoStrip>
        )}
        
        <ScrollingTextBanner>
          <ScrollingText>
            {scrollingTexts.map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </ScrollingText>
        </ScrollingTextBanner>
      </PhotoGallerySection>

      {/* VIP Subscription Highlight Section */}
      <SubscriptionHighlight>
        <Container>
          <SubscriptionCard>
            <SubscriptionBadge>VIP MEMBERSHIP</SubscriptionBadge>
            <SubscriptionTitle>Unlock Premium Animation Courses</SubscriptionTitle>
            
            <SubscriptionPriceBlock>
              <PriceAmount>{formatPrice(MEMBERSHIP_CONFIG.vip.monthlyPrice)}</PriceAmount>
              <PricePeriod>/month</PricePeriod>
            </SubscriptionPriceBlock>
            
            <SubscriptionFeatures>
              <Feature>✓ {MEMBERSHIP_CONFIG.vip.trialDays}-Day Free Trial</Feature>
              <Feature>✓ {MEMBERSHIP_CONFIG.vip.discountPercentage}% Off All Courses</Feature>
              <Feature>✓ Priority Support</Feature>
              <Feature>✓ Cancel Anytime</Feature>
            </SubscriptionFeatures>
            
            <SubscriptionTerms>
              Monthly billing unless cancelled. Cancel anytime through Account Settings or contact support. 
              No partial refunds. <a href="/subscription-policy">View full terms</a>
            </SubscriptionTerms>
            
            <Button as={Link} to="/products" variant="primary">
              Start Free Trial
            </Button>
          </SubscriptionCard>
        </Container>
      </SubscriptionHighlight>
      {/* Information Section */}
      <InfoSection>
        <InfoGrid>
          <InfoBlock>
            <InfoTitle>VIP Membership Subscription</InfoTitle>
            <InfoDescription>
              Join our exclusive VIP Membership program and unlock premium benefits. 
              Get 25% off on all animation courses, priority support, and exclusive content.
            </InfoDescription>
            
            <InfoSubsection>
              <InfoSubtitle>Membership Details</InfoSubtitle>
              <InfoText>
                <InfoHighlight>3-Day Free Trial</InfoHighlight> - Try VIP Membership risk-free for 3 days.<br/>
                <InfoHighlight>€19.99/month</InfoHighlight> after trial period.<br/>
                Membership automatically renews monthly unless cancelled.<br/>
                Cancel anytime during or after the trial period with no penalty.
              </InfoText>
            </InfoSubsection>

            <InfoSubsection>
              <InfoSubtitle>Cancellation Policy</InfoSubtitle>
              <InfoText>
                You will be billed <InfoHighlight>€19.99 monthly</InfoHighlight> unless you cancel your membership. 
                You can cancel your VIP Membership at any time through your account settings. 
                To cancel, visit your Account page and select "Manage Subscription" or contact customer support. 
                Cancellations take effect at the end of your current billing cycle. 
                No refunds for partial months. Access continues until the end of the paid period.
                <br/><br/>
                For complete details, please review our <a href="/subscription-policy" style={{ color: '#4A90E2', textDecoration: 'underline' }}>Subscription & Cancellation Policy</a>.
              </InfoText>
            </InfoSubsection>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Master Digital Animation</InfoTitle>
            <InfoDescription>
              Transform your creative career with comprehensive animation training. 
              Learn character animation, motion design, 2D/3D animation techniques, and advanced animation applications 
              that professionals use to create stunning animated content.
            </InfoDescription>
            
            <InfoSubsection>
              <InfoSubtitle>Professional Animation Development</InfoSubtitle>
              <InfoText>
                Master <InfoHighlight>advanced animation techniques </InfoHighlight> 
                 that deliver stunning, professional animated content. From basic fundamentals to 
                complex motion design, learn to create industry-standard animations.
              </InfoText>
            </InfoSubsection>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Real-World Applications</InfoTitle>
            <InfoDescription>
              Apply animation knowledge immediately with practical projects and case studies. 
              Our courses focus on real creative scenarios and measurable artistic growth in animation.
            </InfoDescription>
            
            <InfoSubsection>
              <InfoSubtitle>Industry-Proven Methods</InfoSubtitle>
              <InfoText>
                Learn <InfoHighlight>battle-tested animation strategies</InfoHighlight> used by 
                top animation studios and creative agencies. From concept development to final animation, 
                master techniques that deliver professional results.
              </InfoText>
            </InfoSubsection>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Lifetime Learning Access</InfoTitle>
            <InfoDescription>
              Enjoy unlimited access to all course materials, updates, and new content. 
              Stay ahead of the rapidly evolving animation industry with continuous learning.
            </InfoDescription>
            
            <InfoSubsection>
              <InfoSubtitle>Always Up-to-Date Content</InfoSubtitle>
              <InfoText>
                Access <InfoHighlight>regularly updated curriculum</InfoHighlight> that 
                evolves with animation technology. New features, tools, and techniques are 
                added monthly to keep your skills current.
              </InfoText>
            </InfoSubsection>
          </InfoBlock>

          <InfoBlock>
            <InfoTitle>Expert Community Support</InfoTitle>
            <InfoDescription>
              Join a thriving community of animation artists and receive personalized guidance. 
              Get answers to your questions and accelerate your creative learning journey.
            </InfoDescription>
            
            <InfoSubsection>
              <InfoSubtitle>24/7 Community Access</InfoSubtitle>
              <InfoText>
                Connect with <InfoHighlight>hundreds of animation learners worldwide </InfoHighlight> 
                through our exclusive community platform. Share projects, get feedback, 
                and collaborate on animation projects.
              </InfoText>
            </InfoSubsection>
          </InfoBlock>
        </InfoGrid>
      </InfoSection>
    </>
  );
};

export default Home;