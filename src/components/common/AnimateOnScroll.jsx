/**
 * =========================================================================
 * ANIMATE ON SCROLL COMPONENT - FRAMER MOTION WRAPPER
 * =========================================================================
 * 
 * Simple scroll animation wrapper component using Framer Motion.
 * Animates elements when they come into view during scroll.
 * 
 * INSTALLATION:
 * npm install framer-motion
 * 
 * REQUIREMENTS:
 * - This component uses "use client" directive for Next.js compatibility
 * - Requires framer-motion library
 * - Only works in client-side rendering environment
 * 
 * =========================================================================
 */

// components/animate-on-scroll.js
"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * AnimateOnScroll Component
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to be animated
 * @param {string} props.animation - Animation type (default: "fadeInUp")
 * @param {number} props.duration - Animation duration in seconds (default: 0.8)
 * @param {number} props.delay - Delay before animation starts in seconds (default: 0)
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.once - Animate only once or repeat (default: true)
 * @param {number} props.amount - Intersection threshold 0-1 (default: 0.1)
 * @param {string} props.easing - Animation easing function (default: "easeOut")
 * 
 * USAGE EXAMPLES:
 * 
 * // Basic usage
 * <AnimateOnScroll animation="fadeInUp">
 *   <div>Your content here</div>
 * </AnimateOnScroll>
 * 
 * // With custom timing
 * <AnimateOnScroll 
 *   animation="scaleIn" 
 *   duration={1.2} 
 *   delay={0.3}
 * >
 *   <div>Delayed scale animation</div>
 * </AnimateOnScroll>
 * 
 * // Multiple animations in sequence
 * <AnimateOnScroll animation="fadeInLeft" delay={0}>
 *   <div>First item</div>
 * </AnimateOnScroll>
 * <AnimateOnScroll animation="fadeInLeft" delay={0.2}>
 *   <div>Second item (200ms later)</div>
 * </AnimateOnScroll>
 * <AnimateOnScroll animation="fadeInLeft" delay={0.4}>
 *   <div>Third item (400ms later)</div>
 * </AnimateOnScroll>
 */
const AnimateOnScroll = ({
    children,
    animation = "fadeInUp",
    duration = 0.8,
    delay = 0,
    className = "",
    once = true,
    amount = 0.1,
    easing = "easeOut"
}) => {
    const ref = useRef(null)

    // useInView hook detects when element enters viewport
    // once: true = animate only once, false = animate every time it enters view
    // amount: 0.1 = trigger when 10% of element is visible
    const isInView = useInView(ref, { once, amount })

    /**
     * AVAILABLE ANIMATIONS
     * =========================================================================
     * 
     * FADE ANIMATIONS:
     * - "fadeIn"       : Simple opacity fade
     * - "fadeInUp"     : Fade in from bottom (moves up)
     * - "fadeInDown"   : Fade in from top (moves down)  
     * - "fadeInLeft"   : Fade in from right (moves left)
     * - "fadeInRight"  : Fade in from left (moves right)
     * 
     * BLUR ANIMATIONS:
   * - "blurIn"       : Simple blur to clear fade
   * - "blurInUp"     : Blur + fade in from bottom
   * - "blurInDown"   : Blur + fade in from top
   * - "blurInLeft"   : Blur + fade in from right
   * - "blurInRight"  : Blur + fade in from left
   * - "blurInScale"  : Blur + scale effect
   * 
   * SCALE ANIMATIONS:
     * - "scaleIn"      : Scale from 80% to 100% with fade
     * - "scaleInUp"    : Scale + move up
     * - "scaleInDown"  : Scale + move down
     * 
     * SLIDE ANIMATIONS:
     * - "slideInUp"    : Slide from bottom (larger distance)
     * - "slideInDown"  : Slide from top (larger distance)
     * - "slideInLeft"  : Slide from right (larger distance)
     * - "slideInRight" : Slide from left (larger distance)
     * 
     * ROTATION ANIMATIONS:
     * - "rotateIn"     : Rotate from -10deg to 0deg with scale
     * - "rotateInLeft" : Rotate + move from left
     * - "rotateInRight": Rotate + move from right
     * 
     * SPECIAL EFFECTS:
     * - "bounce"       : Bouncy entrance with spring physics
     * - "elastic"      : Elastic scale effect
     * - "zoomIn"       : Dramatic zoom from small to normal
     * 
     * =========================================================================
     */
    const animations = {
        // === FADE ANIMATIONS ===
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        fadeInUp: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        },
        fadeInDown: {
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 }
        },
        fadeInLeft: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        },
        fadeInRight: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
        },

        // === SCALE ANIMATIONS ===
        scaleIn: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        },
        scaleInUp: {
            hidden: { opacity: 0, scale: 0.8, y: 30 },
            visible: { opacity: 1, scale: 1, y: 0 }
        },
        scaleInDown: {
            hidden: { opacity: 0, scale: 0.8, y: -30 },
            visible: { opacity: 1, scale: 1, y: 0 }
        },

        // === SLIDE ANIMATIONS (larger distance) ===
        slideInUp: {
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 0 }
        },
        slideInDown: {
            hidden: { opacity: 0, y: -80 },
            visible: { opacity: 1, y: 0 }
        },
        slideInLeft: {
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 }
        },
        slideInRight: {
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: 1, x: 0 }
        },

        // === ROTATION ANIMATIONS ===
        rotateIn: {
            hidden: { opacity: 0, rotate: -10, scale: 0.9 },
            visible: { opacity: 1, rotate: 0, scale: 1 }
        },
        rotateInLeft: {
            hidden: { opacity: 0, rotate: -15, x: -30 },
            visible: { opacity: 1, rotate: 0, x: 0 }
        },
        rotateInRight: {
            hidden: { opacity: 0, rotate: 15, x: 30 },
            visible: { opacity: 1, rotate: 0, x: 0 }
        },

        // === BLUR ANIMATIONS ===
        blurIn: {
            hidden: { opacity: 0, filter: "blur(10px)" },
            visible: { opacity: 1, filter: "blur(0px)" }
        },
        blurInUp: {
            hidden: { opacity: 0, filter: "blur(10px)", y: 30 },
            visible: { opacity: 1, filter: "blur(0px)", y: 0 }
        },
        blurInDown: {
            hidden: { opacity: 0, filter: "blur(10px)", y: -30 },
            visible: { opacity: 1, filter: "blur(0px)", y: 0 }
        },
        blurInLeft: {
            hidden: { opacity: 0, filter: "blur(10px)", x: -30 },
            visible: { opacity: 1, filter: "blur(0px)", x: 0 }
        },
        blurInRight: {
            hidden: { opacity: 0, filter: "blur(10px)", x: 30 },
            visible: { opacity: 1, filter: "blur(0px)", x: 0 }
        },
        blurInScale: {
            hidden: { opacity: 0, filter: "blur(15px)", scale: 0.9 },
            visible: { opacity: 1, filter: "blur(0px)", scale: 1 }
        },

        // === BACKDROP-BLUR SAFE ANIMATIONS ===
        // Gunakan ini sebagai pengganti blur animations
        softFadeInUp: {
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 }
        },
        softFadeInDown: {
            hidden: { opacity: 0, y: -30, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 }
        },
        softFadeInLeft: {
            hidden: { opacity: 0, x: -30, scale: 0.95 },
            visible: { opacity: 1, x: 0, scale: 1 }
        },
        softFadeInRight: {
            hidden: { opacity: 0, x: 30, scale: 0.95 },
            visible: { opacity: 1, x: 0, scale: 1 }
        },

        // === GLOW EFFECT (Alternative to blur) ===
        glowIn: {
            hidden: {
                opacity: 0,
                boxShadow: "0 0 0px rgba(59, 130, 246, 0)"
            },
            visible: {
                opacity: 1,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
            }
        },
        glowInUp: {
            hidden: {
                opacity: 0,
                y: 30,
                boxShadow: "0 0 0px rgba(59, 130, 246, 0)"
            },
            visible: {
                opacity: 1,
                y: 0,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
            }
        },

        // === BACKDROP-COMPATIBLE BLUR ===
        // Hanya blur pada transform, bukan filter
        transformBlurInUp: {
            hidden: {
                opacity: 0,
                y: 30,
                scale: 0.9,
                rotateX: 10
            },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0
            }
        },

        // === SPECIAL EFFECTS ===
        bounce: {
            hidden: { opacity: 0, y: 30, scale: 0.9 },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                // Override transition for spring effect
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: delay
                }
            }
        },
        elastic: {
            hidden: { opacity: 0, scale: 0.5 },
            visible: {
                opacity: 1,
                scale: 1,
                // Override transition for elastic effect
                transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: delay
                }
            }
        },
        zoomIn: {
            hidden: { opacity: 0, scale: 0.3 },
            visible: { opacity: 1, scale: 1 }
        }
    }

    // Get animation variant or fallback to fadeInUp
    const variant = animations[animation] || animations.fadeInUp

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variant}
            transition={{
                duration,
                delay,
                ease: easing
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/**
 * =========================================================================
 * IMPLEMENTATION EXAMPLES FOR DIFFERENT USE CASES
 * =========================================================================
 * 
 * // === BLUR EFFECTS (Great for images and text) ===
 * <AnimateOnScroll animation="blurIn" duration={1.0}>
 *   <img src="hero-image.jpg" alt="Hero" />
 * </AnimateOnScroll>
 * 
 * <AnimateOnScroll animation="blurInUp" delay={0.3}>
 *   <h2>Sharp Text Reveal</h2>
 * </AnimateOnScroll>
 * 
 * <AnimateOnScroll animation="blurInScale" duration={1.2}>
 *   <div className="feature-card">Blur + Scale combo</div>
 * </AnimateOnScroll>
 * 
 * // === HERO SECTION ===
 * <AnimateOnScroll animation="fadeIn" duration={1.2}>
 *   <div className="hero-section">
 *     <h1>Welcome to Our Website</h1>
 *   </div>
 * </AnimateOnScroll>
 * 
 * // === STATS CARDS (Staggered) ===
 * {stats.map((stat, index) => (
 *   <AnimateOnScroll 
 *     key={stat.id}
 *     animation="scaleInUp" 
 *     delay={index * 0.15}
 *     duration={0.6}
 *   >
 *     <StatCard {...stat} />
 *   </AnimateOnScroll>
 * ))}
 * 
 * // === CONTENT SECTIONS ===
 * <AnimateOnScroll animation="slideInUp" delay={0.3}>
 *   <div className="content-section">
 *     <h2>About Us</h2>
 *     <p>Content here...</p>
 *   </div>
 * </AnimateOnScroll>
 * 
 * // === ZIGZAG LAYOUT (Like VisiMisi) ===
 * {missionItems.map((item, index) => (
 *   <AnimateOnScroll 
 *     key={index}
 *     animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
 *     delay={index * 0.2}
 *   >
 *     <MissionCard {...item} />
 *   </AnimateOnScroll>
 * ))}
 * 
 * // === CALL TO ACTION ===
 * <AnimateOnScroll animation="bounce" delay={0.5}>
 *   <button className="cta-button">
 *     Get Started Now
 *   </button>
 * </AnimateOnScroll>
 * 
 * // === IMAGE GALLERIES ===
 * <AnimateOnScroll animation="zoomIn" duration={1.0}>
 *   <img src="gallery-image.jpg" alt="Gallery" />
 * </AnimateOnScroll>
 * 
 * // === TESTIMONIALS ===
 * <AnimateOnScroll animation="rotateIn" delay={0.4}>
 *   <div className="testimonial-card">
 *     <p>"Amazing service!"</p>
 *     <span>- Happy Customer</span>
 *   </div>
 * </AnimateOnScroll>
 * 
 * =========================================================================
 * PERFORMANCE TIPS
 * =========================================================================
 * 
 * 1. Use once={true} for better performance (default)
 * 2. Don't animate too many elements simultaneously
 * 3. Use smaller delay increments (0.1-0.2s) for smooth stagger
 * 4. Prefer transform properties (x, y, scale, rotate) over layout properties
 * 5. Set appropriate amount threshold (0.1 = 10% visible triggers animation)
 * 6. For mobile, consider reducing animation complexity
 * 
 * =========================================================================
 * TROUBLESHOOTING
 * =========================================================================
 * 
 * Q: Animation not working?
 * A: Make sure component has "use client" and framer-motion is installed
 * 
 * Q: Animation too fast/slow?
 * A: Adjust duration prop (in seconds, e.g., 0.5, 1.2, 2.0)
 * 
 * Q: Want to animate multiple times?
 * A: Set once={false}
 * 
 * Q: Animation triggers too early/late?
 * A: Adjust amount prop (0.1 = early, 0.5 = middle, 0.8 = late)
 * 
 * Q: Need custom animation?
 * A: Add new variant to animations object above
 * 
 * =========================================================================
 */

// Named export for flexibility
export { AnimateOnScroll }

export default AnimateOnScroll