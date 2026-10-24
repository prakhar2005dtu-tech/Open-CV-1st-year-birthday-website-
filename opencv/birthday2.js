// // // Global variables
// // let currentSection = 0
// // let currentMessage = 0
// // let currentPhoto = 0
// // let currentQuestion = 0
// // let quizScore = 0
// // let selectedAnswer = null
// // let isPlaying = false
// // let isMuted = false

// // // Data
// // const messages = [
// //   {
// //     text: "From the moment you walked into my life, everything changed for the better. You brought colors I never knew existed and showed me what true happiness feels like. 🌈",
// //     author: "Your loving boyfriend",
// //   },
// //   {
// //     text: "Your smile is my favorite notification, your laugh is my favorite song, and your happiness is my favorite mission. Happy 19th birthday, beautiful! 😍",
// //     author: "Forever yours",
// //   },
// //   {
// //     text: "19 years ago, the world became a brighter place. Today, we celebrate not just your birthday, but the incredible person you've become. ✨",
// //     author: "With all my love",
// //   },
// //   {
// //     text: "You're not just my girlfriend, you're my best friend, my partner in crime, my safe haven, and my greatest adventure all rolled into one amazing person. 💕",
// //     author: "Your biggest fan",
// //   },
// //   {
// //     text: "Every day with you feels like a fairytale. Thank you for being the princess who chose to share her kingdom with me. 👑",
// //     author: "Your prince",
// //   },
// //   {
// //     text: "Your kindness touches everyone around you, your intelligence inspires me daily, and your love makes me the luckiest person alive. 🍀",
// //     author: "Grateful for you",
// //   },
// // ]

// // const quizQuestions = [
// //   {
// //     question: "What's my favorite thing about you?",
// //     options: ["Your beautiful smile", "Your kind heart", "Your amazing laugh", "Everything about you"],
// //     correct: 3,
// //     explanation: "How could I choose just one thing? You're perfect in every way! 💕",
// //   },
// //   {
// //     question: "What was our first date?",
// //     options: ["Coffee shop", "Movie theater", "Park walk", "Restaurant"],
// //     correct: 0,
// //     explanation: "That little coffee shop where we talked for hours and I knew you were special ☕",
// //   },
// //   {
// //     question: "What's your favorite color?",
// //     options: ["Pink", "Purple", "Blue", "Yellow"],
// //     correct: 1,
// //     explanation: "Purple, just like the beautiful sunset we watched together 💜",
// //   },
// //   {
// //     question: "What's our special song?",
// //     options: ["Perfect by Ed Sheeran", "All of Me by John Legend", "Thinking Out Loud", "A Thousand Years"],
// //     correct: 1,
// //     explanation: "Because you truly are all of me, and I'm all of you 🎵",
// //   },
// //   {
// //     question: "What do you love most about our relationship?",
// //     options: ["The laughs we share", "How comfortable we are", "Our deep conversations", "All of the above"],
// //     correct: 3,
// //     explanation: "We have something truly special - laughter, comfort, and deep connection 💑",
// //   },
// // ]

// // const photos = [
// //   {
// //     src: "https://via.placeholder.com/600x400/ff69b4/ffffff?text=Our+First+Selfie+💕",
// //     caption: "Our first selfie together - look how happy we were! 📸",
// //     date: "The beginning of forever",
// //   },
// //   {
// //     src: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Magical+Sunset+🌅",
// //     caption: "That magical sunset when you said you loved me 🌅",
// //     date: "Best day ever",
// //   },
// //   {
// //     src: "https://via.placeholder.com/600x400/22c55e/ffffff?text=Laughing+Together+😂",
// //     caption: "You always make me laugh until my cheeks hurt 😂",
// //     date: "Pure joy",
// //   },
// //   {
// //     src: "https://via.placeholder.com/600x400/f59e0b/ffffff?text=Fancy+Dinner+✨",
// //     caption: "Our fancy dinner date - you looked absolutely stunning! ✨",
// //     date: "Dressed to impress",
// //   },
// //   {
// //     src: "https://via.placeholder.com/600x400/06b6d4/ffffff?text=Adventure+Time+🥾",
// //     caption: "Adventure buddies for life! 🥾",
// //     date: "Exploring together",
// //   },
// //   {
// //     src: "https://via.placeholder.com/600x400/ec4899/ffffff?text=Movie+Night+🍿",
// //     caption: "Cozy movie nights are my favorite with you 🍿",
// //     date: "Perfect evening",
// //   },
// // ]

// // const sections = ["countdown", "tree", "messages", "quiz", "gallery"]

// // // Initialize the website
// // document.addEventListener("DOMContentLoaded", () => {
// //   initializeCountdown()
// //   initializeNavigation()
// //   initializeMessages()
// //   initializeQuiz()
// //   initializeGallery()
// //   initializeMusicPlayer()
// //   initializeAnimations()

// //   // Start with countdown section
// //   showSection(0)
// // })

// // // Countdown Timer
// // function initializeCountdown() {
// //   function updateCountdown() {
// //     const targetDate = new Date("2025-07-22T00:00:00").getTime()
// //     const now = new Date().getTime()
// //     const difference = targetDate - now

// //     if (difference > 0) {
// //       const days = Math.floor(difference / (1000 * 60 * 60 * 24))
// //       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
// //       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
// //       const seconds = Math.floor((difference % (1000 * 60)) / 1000)

// //       document.getElementById("days").textContent = days.toString().padStart(2, "0")
// //       document.getElementById("hours").textContent = hours.toString().padStart(2, "0")
// //       document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0")
// //       document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0")
// //     } else {
// //       document.getElementById("days").textContent = "00"
// //       document.getElementById("hours").textContent = "00"
// //       document.getElementById("minutes").textContent = "00"
// //       document.getElementById("seconds").textContent = "00"
// //     }
// //   }

// //   updateCountdown()
// //   setInterval(updateCountdown, 1000)
// // }

// // // Navigation
// // function initializeNavigation() {
// //   const navBtns = document.querySelectorAll(".nav-btn")
// //   const prevBtn = document.getElementById("prevSection")
// //   const nextBtn = document.getElementById("nextSection")

// //   navBtns.forEach((btn, index) => {
// //     btn.addEventListener("click", () => showSection(index))
// //   })

// //   prevBtn.addEventListener("click", () => {
// //     if (currentSection > 0) {
// //       showSection(currentSection - 1)
// //     }
// //   })

// //   nextBtn.addEventListener("click", () => {
// //     if (currentSection < sections.length - 1) {
// //       showSection(currentSection + 1)
// //     }
// //   })
// // }

// // function showSection(index) {
// //   // Hide all sections
// //   document.querySelectorAll(".section").forEach((section) => {
// //     section.classList.remove("active")
// //   })

// //   // Show target section
// //   document.getElementById(sections[index]).classList.add("active")

// //   // Update navigation
// //   document.querySelectorAll(".nav-btn").forEach((btn, i) => {
// //     btn.classList.toggle("active", i === index)
// //   })

// //   // Update section navigation buttons
// //   document.getElementById("prevSection").disabled = index === 0
// //   document.getElementById("nextSection").disabled = index === sections.length - 1

// //   currentSection = index

// //   // Initialize section-specific features
// //   if (sections[index] === "tree") {
// //     startTreeAnimations()
// //   } else if (sections[index] === "messages") {
// //     startTypewriter()
// //   }
// // }

// // // Messages Section
// // function initializeMessages() {
// //   const prevBtn = document.getElementById("prevMessage")
// //   const nextBtn = document.getElementById("nextMessage")

// //   prevBtn.addEventListener("click", () => {
// //     currentMessage = (currentMessage - 1 + messages.length) % messages.length
// //     showMessage()
// //   })

// //   nextBtn.addEventListener("click", () => {
// //     currentMessage = (currentMessage + 1) % messages.length
// //     showMessage()
// //   })

// //   createMessageDots()
// //   showMessage()
// // }

// // function createMessageDots() {
// //   const dotsContainer = document.getElementById("messageDots")
// //   dotsContainer.innerHTML = ""

// //   messages.forEach((_, index) => {
// //     const dot = document.createElement("div")
// //     dot.className = "message-dot"
// //     if (index === currentMessage) dot.classList.add("active")
// //     dot.addEventListener("click", () => {
// //       currentMessage = index
// //       showMessage()
// //     })
// //     dotsContainer.appendChild(dot)
// //   })
// // }

// // function showMessage() {
// //   // Update dots
// //   document.querySelectorAll(".message-dot").forEach((dot, index) => {
// //     dot.classList.toggle("active", index === currentMessage)
// //   })

// //   // Start typewriter effect
// //   startTypewriter()
// // }

// // function startTypewriter() {
// //   const messageText = document.getElementById("messageText")
// //   const messageAuthor = document.getElementById("messageAuthor")
// //   const message = messages[currentMessage]

// //   messageText.textContent = ""
// //   messageAuthor.textContent = message.author

// //   let index = 0
// //   const typeInterval = setInterval(() => {
// //     if (index < message.text.length) {
// //       messageText.textContent += message.text[index]
// //       index++
// //     } else {
// //       clearInterval(typeInterval)
// //     }
// //   }, 50)
// // }

// // // Quiz Section
// // function initializeQuiz() {
// //   document.getElementById("restartBtn").addEventListener("click", resetQuiz)
// //   showQuestion()
// // }

// // function showQuestion() {
// //   const question = quizQuestions[currentQuestion]

// //   document.getElementById("currentQ").textContent = currentQuestion + 1
// //   document.getElementById("totalQ").textContent = quizQuestions.length
// //   document.getElementById("currentScore").textContent = quizScore
// //   document.getElementById("questionText").textContent = question.question

// //   // Create progress dots
// //   const progressDots = document.getElementById("progressDots")
// //   progressDots.innerHTML = ""
// //   quizQuestions.forEach((_, index) => {
// //     const dot = document.createElement("div")
// //     dot.className = "progress-dot"
// //     if (index <= currentQuestion) dot.classList.add("completed")
// //     progressDots.appendChild(dot)
// //   })

// //   // Create options
// //   const optionsContainer = document.getElementById("optionsContainer")
// //   optionsContainer.innerHTML = ""

// //   question.options.forEach((option, index) => {
// //     const optionBtn = document.createElement("button")
// //     optionBtn.className = "option-btn"
// //     optionBtn.innerHTML = `
// //             <div class="option-radio"></div>
// //             <span>${option}</span>
// //         `
// //     optionBtn.addEventListener("click", () => selectAnswer(index))
// //     optionsContainer.appendChild(optionBtn)
// //   })

// //   // Hide explanation and next button
// //   document.getElementById("explanation").style.display = "none"
// //   document.getElementById("nextBtn").style.display = "none"
// //   selectedAnswer = null
// // }

// // function selectAnswer(answerIndex) {
// //   if (selectedAnswer !== null) return // Already answered

// //   selectedAnswer = answerIndex
// //   const question = quizQuestions[currentQuestion]
// //   const options = document.querySelectorAll(".option-btn")

// //   options.forEach((option, index) => {
// //     const radio = option.querySelector(".option-radio")
// //     if (index === answerIndex) {
// //       option.classList.add("selected")
// //       radio.classList.add("selected")
// //     }
// //     option.disabled = true
// //   })

// //   // Show correct answer
// //   setTimeout(() => {
// //     options[question.correct].classList.add("correct")
// //     if (answerIndex !== question.correct) {
// //       options[answerIndex].classList.add("incorrect")
// //     } else {
// //       quizScore++
// //       document.getElementById("currentScore").textContent = quizScore
// //     }

// //     // Show explanation
// //     const explanation = document.getElementById("explanation")
// //     explanation.innerHTML = `
// //             <div class="explanation-icon">⭐</div>
// //             <p>${question.explanation}</p>
// //         `
// //     explanation.style.display = "flex"

// //     // Show next button
// //     const nextBtn = document.getElementById("nextBtn")
// //     nextBtn.textContent = currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"
// //     nextBtn.style.display = "block"
// //     nextBtn.onclick = nextQuestion
// //   }, 1000)
// // }

// // function nextQuestion() {
// //   if (currentQuestion < quizQuestions.length - 1) {
// //     currentQuestion++
// //     showQuestion()
// //   } else {
// //     showQuizComplete()
// //   }
// // }

// // function showQuizComplete() {
// //   document.getElementById("quizContainer").style.display = "none"
// //   document.getElementById("quizComplete").style.display = "block"

// //   // Show final score
// //   document.getElementById("finalScore").textContent = `${quizScore}/${quizQuestions.length}`

// //   // Show score message
// //   const percentage = (quizScore / quizQuestions.length) * 100
// //   let message
// //   if (percentage === 100) message = "Perfect! You know us so well! 🥰"
// //   else if (percentage >= 80) message = "Amazing! You're definitely paying attention! 😍"
// //   else if (percentage >= 60) message = "Great job! You know me pretty well! 😊"
// //   else message = "We need to spend more time together! 😉"

// //   document.getElementById("scoreMessage").textContent = message

// //   // Create confetti
// //   createConfetti()
// // }

// // function createConfetti() {
// //   const confetti = document.getElementById("confetti")
// //   confetti.innerHTML = ""

// //   for (let i = 0; i < 50; i++) {
// //     const piece = document.createElement("div")
// //     piece.className = "confetti-piece"
// //     piece.textContent = Math.random() > 0.5 ? "🎉" : "💖"
// //     piece.style.left = Math.random() * 100 + "%"
// //     piece.style.animationDelay = Math.random() * 2 + "s"
// //     confetti.appendChild(piece)
// //   }
// // }

// // function resetQuiz() {
// //   currentQuestion = 0
// //   quizScore = 0
// //   selectedAnswer = null
// //   document.getElementById("quizContainer").style.display = "block"
// //   document.getElementById("quizComplete").style.display = "none"
// //   showQuestion()
// // }

// // // Gallery Section
// // function initializeGallery() {
// //   const prevBtn = document.getElementById("prevPhoto")
// //   const nextBtn = document.getElementById("nextPhoto")
// //   const modalClose = document.getElementById("modalClose")
// //   const modalPrev = document.getElementById("modalPrev")
// //   const modalNext = document.getElementById("modalNext")

// //   prevBtn.addEventListener("click", () => {
// //     currentPhoto = (currentPhoto - 1 + photos.length) % photos.length
// //     showPhoto()
// //   })

// //   nextBtn.addEventListener("click", () => {
// //     currentPhoto = (currentPhoto + 1) % photos.length
// //     showPhoto()
// //   })

// //   modalClose.addEventListener("click", closeModal)
// //   modalPrev.addEventListener("click", () => {
// //     currentPhoto = (currentPhoto - 1 + photos.length) % photos.length
// //     showPhoto()
// //     updateModal()
// //   })

// //   modalNext.addEventListener("click", () => {
// //     currentPhoto = (currentPhoto + 1) % photos.length
// //     showPhoto()
// //     updateModal()
// //   })

// //   // Close modal on background click
// //   document.getElementById("photoModal").addEventListener("click", (e) => {
// //     if (e.target.id === "photoModal") {
// //       closeModal()
// //     }
// //   })

// //   createPhotoDots()
// //   createThumbnails()
// //   showPhoto()
// // }

// // function createPhotoDots() {
// //   const dotsContainer = document.getElementById("photoDots")
// //   dotsContainer.innerHTML = ""

// //   photos.forEach((_, index) => {
// //     const dot = document.createElement("div")
// //     dot.className = "photo-dot"
// //     if (index === currentPhoto) dot.classList.add("active")
// //     dot.addEventListener("click", () => {
// //       currentPhoto = index
// //       showPhoto()
// //     })
// //     dotsContainer.appendChild(dot)
// //   })
// // }

// // function createThumbnails() {
// //   const thumbnailGrid = document.getElementById("thumbnailGrid")
// //   thumbnailGrid.innerHTML = ""

// //   photos.forEach((photo, index) => {
// //     const thumbnail = document.createElement("div")
// //     thumbnail.className = "thumbnail"
// //     if (index === currentPhoto) thumbnail.classList.add("active")

// //     thumbnail.innerHTML = `
// //             <img src="${photo.src}" alt="${photo.caption}">
// //             <div class="thumbnail-overlay"></div>
// //         `

// //     thumbnail.addEventListener("click", () => {
// //       currentPhoto = index
// //       showPhoto()
// //       openModal()
// //     })

// //     thumbnailGrid.appendChild(thumbnail)
// //   })
// // }

// // function showPhoto() {
// //   const photo = photos[currentPhoto]

// //   document.getElementById("mainPhoto").src = photo.src
// //   document.getElementById("photoCaption").textContent = photo.caption
// //   document.getElementById("photoDate").textContent = photo.date

// //   // Update dots
// //   document.querySelectorAll(".photo-dot").forEach((dot, index) => {
// //     dot.classList.toggle("active", index === currentPhoto)
// //   })

// //   // Update thumbnails
// //   document.querySelectorAll(".thumbnail").forEach((thumb, index) => {
// //     thumb.classList.toggle("active", index === currentPhoto)
// //   })

// //   // Add click event to main photo
// //   document.querySelector(".photo-container").onclick = () => openModal()
// // }

// // function openModal() {
// //   const modal = document.getElementById("photoModal")
// //   modal.classList.add("active")
// //   updateModal()
// // }

// // function closeModal() {
// //   const modal = document.getElementById("photoModal")
// //   modal.classList.remove("active")
// // }

// // function updateModal() {
// //   const photo = photos[currentPhoto]
// //   document.getElementById("modalImage").src = photo.src
// //   document.getElementById("modalCaption").textContent = photo.caption
// //   document.getElementById("modalDate").textContent = photo.date
// // }

// // // Music Player
// // function initializeMusicPlayer() {
// //   const playBtn = document.getElementById("playBtn")
// //   const muteBtn = document.getElementById("muteBtn")

// //   playBtn.addEventListener("click", togglePlay)
// //   muteBtn.addEventListener("click", toggleMute)
// // }

// // function togglePlay() {
// //   isPlaying = !isPlaying
// //   const playIcon = document.querySelector(".play-icon")
// //   const pauseIcon = document.querySelector(".pause-icon")
// //   const musicIndicator = document.getElementById("musicIndicator")

// //   if (isPlaying) {
// //     playIcon.style.display = "none"
// //     pauseIcon.style.display = "block"
// //     musicIndicator.style.display = "flex"
// //   } else {
// //     playIcon.style.display = "block"
// //     pauseIcon.style.display = "none"
// //     musicIndicator.style.display = "none"
// //   }
// // }

// // function toggleMute() {
// //   isMuted = !isMuted
// //   const volumeIcon = document.querySelector(".volume-icon")
// //   const muteIcon = document.querySelector(".mute-icon")

// //   if (isMuted) {
// //     volumeIcon.style.display = "none"
// //     muteIcon.style.display = "block"
// //   } else {
// //     volumeIcon.style.display = "block"
// //     muteIcon.style.display = "none"
// //   }
// // }

// // // Animations
// // function initializeAnimations() {
// //   createStars()
// //   setInterval(createStars, 300)
// // }

// // function createStars() {
// //   const star = document.createElement("div")
// //   star.className = "star"
// //   star.style.left = Math.random() * 100 + "%"
// //   star.style.animationDelay = Math.random() * 2 + "s"
// //   document.querySelector(".stars-container").appendChild(star)

// //   setTimeout(() => {
// //     if (star.parentNode) {
// //       star.parentNode.removeChild(star)
// //     }
// //   }, 3000)
// // }

// // function startTreeAnimations() {
// //   // Create heart-shaped tree
// //   createHeartTree()

// //   // Create falling hearts
// //   const fallingHeartsContainer = document.getElementById("fallingHearts")
// //   const colors = ["#ff69b4", "#ff1493", "#dc143c", "#ff6347", "#ffa500", "#ffd700"]

// //   function createFallingHeart() {
// //     const heart = document.createElement("div")
// //     heart.className = "falling-heart"
// //     heart.textContent = "💖"
// //     heart.style.left = Math.random() * 100 + "%"
// //     heart.style.color = colors[Math.floor(Math.random() * colors.length)]
// //     heart.style.animationDelay = Math.random() * 2 + "s"
// //     fallingHeartsContainer.appendChild(heart)

// //     setTimeout(() => {
// //       if (heart.parentNode) {
// //         heart.parentNode.removeChild(heart)
// //       }
// //     }, 4000)
// //   }

// //   // Create sparkles
// //   const sparklesContainer = document.getElementById("sparkles")
// //   function createSparkle() {
// //     const sparkle = document.createElement("div")
// //     sparkle.className = "sparkle"
// //     sparkle.textContent = "✨"
// //     sparkle.style.left = 20 + Math.random() * 60 + "%"
// //     sparkle.style.top = 20 + Math.random() * 60 + "%"
// //     sparkle.style.animationDelay = Math.random() * 2 + "s"
// //     sparklesContainer.appendChild(sparkle)

// //     setTimeout(() => {
// //       if (sparkle.parentNode) {
// //         sparkle.parentNode.removeChild(sparkle)
// //       }
// //     }, 2000)
// //   }

// //   // Start animations
// //   const heartInterval = setInterval(createFallingHeart, 800)
// //   const sparkleInterval = setInterval(createSparkle, 1500)

// //   // Clean up when leaving section
// //   setTimeout(() => {
// //     clearInterval(heartInterval)
// //     clearInterval(sparkleInterval)
// //   }, 30000)
// // }

// // function createHeartTree() {
// //   const heartTree = document.getElementById("heartTree")
// //   if (!heartTree) return

// //   heartTree.innerHTML = "" // Clear existing hearts

// //   const colors = ["pink", "red", "purple", "orange", "yellow", "green", "blue", "magenta"]
// //   const heartCount = 45

// //   for (let i = 0; i < heartCount; i++) {
// //     const heartLeaf = document.createElement("div")
// //     heartLeaf.className = `heart-leaf ${colors[Math.floor(Math.random() * colors.length)]}`
// //     heartLeaf.textContent = "💖"
// //     heartLeaf.style.animationDelay = Math.random() * 3 + "s"

// //     // Add click effect
// //     heartLeaf.addEventListener("click", () => {
// //       heartLeaf.style.transform = "scale(1.5)"
// //       setTimeout(() => {
// //         heartLeaf.style.transform = ""
// //       }, 300)
// //     })

// //     heartTree.appendChild(heartLeaf)
// //   }
// // }

// // // Gift button functionality
// // document.querySelector(".gift-btn").addEventListener("click", () => {
// //   alert("🎁 Special surprise coming soon! This could link to a video message, special photo, or another surprise! 💕")
// // })

// // // Keyboard navigation
// // document.addEventListener("keydown", (e) => {
// //   if (e.key === "ArrowLeft" && currentSection > 0) {
// //     showSection(currentSection - 1)
// //   } else if (e.key === "ArrowRight" && currentSection < sections.length - 1) {
// //     showSection(currentSection + 1)
// //   } else if (e.key === "Escape") {
// //     closeModal()
// //   }
// // })

// // // Touch/swipe support for mobile
// // let touchStartX = 0
// // let touchEndX = 0

// // document.addEventListener("touchstart", (e) => {
// //   touchStartX = e.changedTouches[0].screenX
// // })

// // document.addEventListener("touchend", (e) => {
// //   touchEndX = e.changedTouches[0].screenX
// //   handleSwipe()
// // })

// // function handleSwipe() {
// //   const swipeThreshold = 50
// //   const diff = touchStartX - touchEndX

// //   if (Math.abs(diff) > swipeThreshold) {
// //     if (diff > 0 && currentSection < sections.length - 1) {
// //       // Swipe left - next section
// //       showSection(currentSection + 1)
// //     } else if (diff < 0 && currentSection > 0) {
// //       // Swipe right - previous section
// //       showSection(currentSection - 1)
// //     }
// //   }
// // }

// // // Smooth scrolling for better UX
// // document.documentElement.style.scrollBehavior = "smooth"

// // // Add loading animation
// // window.addEventListener("load", () => {
// //   document.body.style.opacity = "0"
// //   document.body.style.transition = "opacity 0.5s ease-in-out"

// //   setTimeout(() => {
// //     document.body.style.opacity = "1"
// //   }, 100)
// // })

// // Global variables
// let currentSection = 0
// let currentMessage = 0
// let currentPhoto = 0
// let currentQuestion = 0
// let quizScore = 0
// let selectedAnswer = null
// let isPlaying = false
// let isMuted = false

// // Data
// const messages = [
//   {
//     text: "From the moment you walked into my life, everything changed for the better. You brought colors I never knew existed and showed me what true happiness feels like. 🌈",
//     author: "Your loving boyfriend",
//   },
//   {
//     text: "Your smile is my favorite notification, your laugh is my favorite song, and your happiness is my favorite mission. Happy 19th birthday, beautiful! 😍",
//     author: "Forever yours",
//   },
//   {
//     text: "19 years ago, the world became a brighter place. Today, we celebrate not just your birthday, but the incredible person you've become. ✨",
//     author: "With all my love",
//   },
//   {
//     text: "You're not just my girlfriend, you're my best friend, my partner in crime, my safe haven, and my greatest adventure all rolled into one amazing person. 💕",
//     author: "Your biggest fan",
//   },
//   {
//     text: "Every day with you feels like a fairytale. Thank you for being the princess who chose to share her kingdom with me. 👑",
//     author: "Your prince",
//   },
//   {
//     text: "Your kindness touches everyone around you, your intelligence inspires me daily, and your love makes me the luckiest person alive. 🍀",
//     author: "Grateful for you",
//   },
// ]

// const quizQuestions = [
//   {
//     question: "What's my favorite thing about you?",
//     options: ["Your beautiful smile", "Your kind heart", "Your amazing laugh", "Everything about you"],
//     correct: 3,
//     explanation: "How could I choose just one thing? You're perfect in every way! 💕",
//   },
//   {
//     question: "What was our first date?",
//     options: ["Coffee shop", "Movie theater", "Park walk", "Restaurant"],
//     correct: 0,
//     explanation: "That little coffee shop where we talked for hours and I knew you were special ☕",
//   },
//   {
//     question: "What's your favorite color?",
//     options: ["Pink", "Purple", "Blue", "Yellow"],
//     correct: 1,
//     explanation: "Purple, just like the beautiful sunset we watched together 💜",
//   },
//   {
//     question: "What's our special song?",
//     options: ["Perfect by Ed Sheeran", "All of Me by John Legend", "Thinking Out Loud", "A Thousand Years"],
//     correct: 1,
//     explanation: "Because you truly are all of me, and I'm all of you 🎵",
//   },
//   {
//     question: "What do you love most about our relationship?",
//     options: ["The laughs we share", "How comfortable we are", "Our deep conversations", "All of the above"],
//     correct: 3,
//     explanation: "We have something truly special - laughter, comfort, and deep connection 💑",
//   },
// ]

// const photos = [
//   {
//     src: "https://via.placeholder.com/600x400/ff69b4/ffffff?text=Our+First+Selfie+💕",
//     caption: "Our first selfie together - look how happy we were! 📸",
//     date: "The beginning of forever",
//   },
//   {
//     src: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Magical+Sunset+🌅",
//     caption: "That magical sunset when you said you loved me 🌅",
//     date: "Best day ever",
//   },
//   {
//     src: "https://via.placeholder.com/600x400/22c55e/ffffff?text=Laughing+Together+😂",
//     caption: "You always make me laugh until my cheeks hurt 😂",
//     date: "Pure joy",
//   },
//   {
//     src: "https://via.placeholder.com/600x400/f59e0b/ffffff?text=Fancy+Dinner+✨",
//     caption: "Our fancy dinner date - you looked absolutely stunning! ✨",
//     date: "Dressed to impress",
//   },
//   {
//     src: "https://via.placeholder.com/600x400/06b6d4/ffffff?text=Adventure+Time+🥾",
//     caption: "Adventure buddies for life! 🥾",
//     date: "Exploring together",
//   },
//   {
//     src: "https://via.placeholder.com/600x400/ec4899/ffffff?text=Movie+Night+🍿",
//     caption: "Cozy movie nights are my favorite with you 🍿",
//     date: "Perfect evening",
//   },
// ]

// const sections = ["countdown", "tree", "messages", "quiz", "gallery"]

// // Initialize the website
// document.addEventListener("DOMContentLoaded", () => {
//   initializeCountdown()
//   initializeNavigation()
//   initializeMessages()
//   initializeQuiz()
//   initializeGallery()
//   initializeMusicPlayer()
//   initializeAnimations()

//   // Start with countdown section
//   showSection(0)
// })

// // Countdown Timer
// function initializeCountdown() {
//   function updateCountdown() {
//     const targetDate = new Date("2025-07-22T00:00:00").getTime()
//     const now = new Date().getTime()
//     const difference = targetDate - now

//     if (difference > 0) {
//       const days = Math.floor(difference / (1000 * 60 * 60 * 24))
//       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
//       const seconds = Math.floor((difference % (1000 * 60)) / 1000)

//       document.getElementById("days").textContent = days.toString().padStart(2, "0")
//       document.getElementById("hours").textContent = hours.toString().padStart(2, "0")
//       document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0")
//       document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0")
//     } else {
//       document.getElementById("days").textContent = "00"
//       document.getElementById("hours").textContent = "00"
//       document.getElementById("minutes").textContent = "00"
//       document.getElementById("seconds").textContent = "00"
//     }
//   }

//   updateCountdown()
//   setInterval(updateCountdown, 1000)
// }

// // Navigation
// function initializeNavigation() {
//   const navBtns = document.querySelectorAll(".nav-btn")
//   const prevBtn = document.getElementById("prevSection")
//   const nextBtn = document.getElementById("nextSection")

//   navBtns.forEach((btn, index) => {
//     btn.addEventListener("click", () => showSection(index))
//   })

//   prevBtn.addEventListener("click", () => {
//     if (currentSection > 0) {
//       showSection(currentSection - 1)
//     }
//   })

//   nextBtn.addEventListener("click", () => {
//     if (currentSection < sections.length - 1) {
//       showSection(currentSection + 1)
//     }
//   })
// }

// function showSection(index) {
//   // Hide all sections
//   document.querySelectorAll(".section").forEach((section) => {
//     section.classList.remove("active")
//   })

//   // Show target section
//   document.getElementById(sections[index]).classList.add("active")

//   // Update navigation
//   document.querySelectorAll(".nav-btn").forEach((btn, i) => {
//     btn.classList.toggle("active", i === index)
//   })

//   // Update section navigation buttons
//   document.getElementById("prevSection").disabled = index === 0
//   document.getElementById("nextSection").disabled = index === sections.length - 1

//   currentSection = index

//   // Initialize section-specific features
//   if (sections[index] === "tree") {
//     startTreeAnimations()
//   } else if (sections[index] === "messages") {
//     startTypewriter()
//   }
// }

// // Messages Section
// function initializeMessages() {
//   const prevBtn = document.getElementById("prevMessage")
//   const nextBtn = document.getElementById("nextMessage")

//   prevBtn.addEventListener("click", () => {
//     currentMessage = (currentMessage - 1 + messages.length) % messages.length
//     showMessage()
//   })

//   nextBtn.addEventListener("click", () => {
//     currentMessage = (currentMessage + 1) % messages.length
//     showMessage()
//   })

//   createMessageDots()
//   showMessage()
// }

// function createMessageDots() {
//   const dotsContainer = document.getElementById("messageDots")
//   dotsContainer.innerHTML = ""

//   messages.forEach((_, index) => {
//     const dot = document.createElement("div")
//     dot.className = "message-dot"
//     if (index === currentMessage) dot.classList.add("active")
//     dot.addEventListener("click", () => {
//       currentMessage = index
//       showMessage()
//     })
//     dotsContainer.appendChild(dot)
//   })
// }

// function showMessage() {
//   // Update dots
//   document.querySelectorAll(".message-dot").forEach((dot, index) => {
//     dot.classList.toggle("active", index === currentMessage)
//   })

//   // Start typewriter effect
//   startTypewriter()
// }

// function startTypewriter() {
//   const messageText = document.getElementById("messageText")
//   const messageAuthor = document.getElementById("messageAuthor")
//   const message = messages[currentMessage]

//   messageText.textContent = ""
//   messageAuthor.textContent = message.author

//   let index = 0
//   const typeInterval = setInterval(() => {
//     if (index < message.text.length) {
//       messageText.textContent += message.text[index]
//       index++
//     } else {
//       clearInterval(typeInterval)
//     }
//   }, 50)
// }

// // Quiz Section
// function initializeQuiz() {
//   document.getElementById("restartBtn").addEventListener("click", resetQuiz)
//   showQuestion()
// }

// function showQuestion() {
//   const question = quizQuestions[currentQuestion]

//   document.getElementById("currentQ").textContent = currentQuestion + 1
//   document.getElementById("totalQ").textContent = quizQuestions.length
//   document.getElementById("currentScore").textContent = quizScore
//   document.getElementById("questionText").textContent = question.question

//   // Create progress dots
//   const progressDots = document.getElementById("progressDots")
//   progressDots.innerHTML = ""
//   quizQuestions.forEach((_, index) => {
//     const dot = document.createElement("div")
//     dot.className = "progress-dot"
//     if (index <= currentQuestion) dot.classList.add("completed")
//     progressDots.appendChild(dot)
//   })

//   // Create options
//   const optionsContainer = document.getElementById("optionsContainer")
//   optionsContainer.innerHTML = ""

//   question.options.forEach((option, index) => {
//     const optionBtn = document.createElement("button")
//     optionBtn.className = "option-btn"
//     optionBtn.innerHTML = `
//             <div class="option-radio"></div>
//             <span>${option}</span>
//         `
//     optionBtn.addEventListener("click", () => selectAnswer(index))
//     optionsContainer.appendChild(optionBtn)
//   })

//   // Hide explanation and next button
//   document.getElementById("explanation").style.display = "none"
//   document.getElementById("nextBtn").style.display = "none"
//   selectedAnswer = null
// }

// function selectAnswer(answerIndex) {
//   if (selectedAnswer !== null) return // Already answered

//   selectedAnswer = answerIndex
//   const question = quizQuestions[currentQuestion]
//   const options = document.querySelectorAll(".option-btn")

//   options.forEach((option, index) => {
//     const radio = option.querySelector(".option-radio")
//     if (index === answerIndex) {
//       option.classList.add("selected")
//       radio.classList.add("selected")
//     }
//     option.disabled = true
//   })

//   // Show correct answer
//   setTimeout(() => {
//     options[question.correct].classList.add("correct")
//     if (answerIndex !== question.correct) {
//       options[answerIndex].classList.add("incorrect")
//     } else {
//       quizScore++
//       document.getElementById("currentScore").textContent = quizScore
//     }

//     // Show explanation
//     const explanation = document.getElementById("explanation")
//     explanation.innerHTML = `
//             <div class="explanation-icon">⭐</div>
//             <p>${question.explanation}</p>
//         `
//     explanation.style.display = "flex"

//     // Show next button
//     const nextBtn = document.getElementById("nextBtn")
//     nextBtn.textContent = currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"
//     nextBtn.style.display = "block"
//     nextBtn.onclick = nextQuestion
//   }, 1000)
// }

// function nextQuestion() {
//   if (currentQuestion < quizQuestions.length - 1) {
//     currentQuestion++
//     showQuestion()
//   } else {
//     showQuizComplete()
//   }
// }

// function showQuizComplete() {
//   document.getElementById("quizContainer").style.display = "none"
//   document.getElementById("quizComplete").style.display = "block"

//   // Show final score
//   document.getElementById("finalScore").textContent = `${quizScore}/${quizQuestions.length}`

//   // Show score message
//   const percentage = (quizScore / quizQuestions.length) * 100
//   let message
//   if (percentage === 100) message = "Perfect! You know us so well! 🥰"
//   else if (percentage >= 80) message = "Amazing! You're definitely paying attention! 😍"
//   else if (percentage >= 60) message = "Great job! You know me pretty well! 😊"
//   else message = "We need to spend more time together! 😉"

//   document.getElementById("scoreMessage").textContent = message

//   // Create confetti
//   createConfetti()
// }

// function createConfetti() {
//   const confetti = document.getElementById("confetti")
//   confetti.innerHTML = ""

//   for (let i = 0; i < 50; i++) {
//     const piece = document.createElement("div")
//     piece.className = "confetti-piece"
//     piece.textContent = Math.random() > 0.5 ? "🎉" : "💖"
//     piece.style.left = Math.random() * 100 + "%"
//     piece.style.animationDelay = Math.random() * 2 + "s"
//     confetti.appendChild(piece)
//   }
// }

// function resetQuiz() {
//   currentQuestion = 0
//   quizScore = 0
//   selectedAnswer = null
//   document.getElementById("quizContainer").style.display = "block"
//   document.getElementById("quizComplete").style.display = "none"
//   showQuestion()
// }

// // Gallery Section
// function initializeGallery() {
//   const prevBtn = document.getElementById("prevPhoto")
//   const nextBtn = document.getElementById("nextPhoto")
//   const modalClose = document.getElementById("modalClose")
//   const modalPrev = document.getElementById("modalPrev")
//   const modalNext = document.getElementById("modalNext")

//   prevBtn.addEventListener("click", () => {
//     currentPhoto = (currentPhoto - 1 + photos.length) % photos.length
//     showPhoto()
//   })

//   nextBtn.addEventListener("click", () => {
//     currentPhoto = (currentPhoto + 1) % photos.length
//     showPhoto()
//   })

//   modalClose.addEventListener("click", closeModal)
//   modalPrev.addEventListener("click", () => {
//     currentPhoto = (currentPhoto - 1 + photos.length) % photos.length
//     showPhoto()
//     updateModal()
//   })

//   modalNext.addEventListener("click", () => {
//     currentPhoto = (currentPhoto + 1) % photos.length
//     showPhoto()
//     updateModal()
//   })

//   // Close modal on background click
//   document.getElementById("photoModal").addEventListener("click", (e) => {
//     if (e.target.id === "photoModal") {
//       closeModal()
//     }
//   })

//   createPhotoDots()
//   createThumbnails()
//   showPhoto()
// }

// function createPhotoDots() {
//   const dotsContainer = document.getElementById("photoDots")
//   dotsContainer.innerHTML = ""

//   photos.forEach((_, index) => {
//     const dot = document.createElement("div")
//     dot.className = "photo-dot"
//     if (index === currentPhoto) dot.classList.add("active")
//     dot.addEventListener("click", () => {
//       currentPhoto = index
//       showPhoto()
//     })
//     dotsContainer.appendChild(dot)
//   })
// }

// function createThumbnails() {
//   const thumbnailGrid = document.getElementById("thumbnailGrid")
//   thumbnailGrid.innerHTML = ""

//   photos.forEach((photo, index) => {
//     const thumbnail = document.createElement("div")
//     thumbnail.className = "thumbnail"
//     if (index === currentPhoto) thumbnail.classList.add("active")

//     thumbnail.innerHTML = `
//             <img src="${photo.src}" alt="${photo.caption}">
//             <div class="thumbnail-overlay"></div>
//         `

//     thumbnail.addEventListener("click", () => {
//       currentPhoto = index
//       showPhoto()
//       openModal()
//     })

//     thumbnailGrid.appendChild(thumbnail)
//   })
// }

// function showPhoto() {
//   const photo = photos[currentPhoto]

//   document.getElementById("mainPhoto").src = photo.src
//   document.getElementById("photoCaption").textContent = photo.caption
//   document.getElementById("photoDate").textContent = photo.date

//   // Update dots
//   document.querySelectorAll(".photo-dot").forEach((dot, index) => {
//     dot.classList.toggle("active", index === currentPhoto)
//   })

//   // Update thumbnails
//   document.querySelectorAll(".thumbnail").forEach((thumb, index) => {
//     thumb.classList.toggle("active", index === currentPhoto)
//   })

//   // Add click event to main photo
//   document.querySelector(".photo-container").onclick = () => openModal()
// }

// function openModal() {
//   const modal = document.getElementById("photoModal")
//   modal.classList.add("active")
//   updateModal()
// }

// function closeModal() {
//   const modal = document.getElementById("photoModal")
//   modal.classList.remove("active")
// }

// function updateModal() {
//   const photo = photos[currentPhoto]
//   document.getElementById("modalImage").src = photo.src
//   document.getElementById("modalCaption").textContent = photo.caption
//   document.getElementById("modalDate").textContent = photo.date
// }

// // Music Player
// function initializeMusicPlayer() {
//   const playBtn = document.getElementById("playBtn")
//   const muteBtn = document.getElementById("muteBtn")
//   const audio = document.getElementById("backgroundMusic")

//   // Set initial volume
//   if (audio) {
//     audio.volume = 0.3 // Set to 30% volume so it's not too loud
//   }

//   playBtn.addEventListener("click", togglePlay)
//   muteBtn.addEventListener("click", toggleMute)
// }

// function togglePlay() {
//   const audio = document.getElementById("backgroundMusic")
//   const playIcon = document.querySelector(".play-icon")
//   const pauseIcon = document.querySelector(".pause-icon")
//   const musicIndicator = document.getElementById("musicIndicator")

//   if (!audio) {
//     console.log("No audio element found")
//     return
//   }

//   if (isPlaying) {
//     // Pause the music
//     audio.pause()
//     playIcon.style.display = "block"
//     pauseIcon.style.display = "none"
//     musicIndicator.style.display = "none"
//     isPlaying = false
//   } else {
//     // Play the music
//     audio
//       .play()
//       .then(() => {
//         playIcon.style.display = "none"
//         pauseIcon.style.display = "block"
//         musicIndicator.style.display = "flex"
//         isPlaying = true
//       })
//       .catch((error) => {
//         console.log("Autoplay prevented by browser:", error)
//         // Show a message to user that they need to interact first
//         alert("Please click the play button to start the music! 🎵")
//       })
//   }
// }

// function toggleMute() {
//   const audio = document.getElementById("backgroundMusic")
//   const volumeIcon = document.querySelector(".volume-icon")
//   const muteIcon = document.querySelector(".mute-icon")

//   if (!audio) return

//   if (isMuted) {
//     // Unmute
//     audio.muted = false
//     volumeIcon.style.display = "block"
//     muteIcon.style.display = "none"
//     isMuted = false
//   } else {
//     // Mute
//     audio.muted = true
//     volumeIcon.style.display = "none"
//     muteIcon.style.display = "block"
//     isMuted = true
//   }
// }

// // Animations
// function initializeAnimations() {
//   createStars()
//   setInterval(createStars, 300)
// }

// function createStars() {
//   const star = document.createElement("div")
//   star.className = "star"
//   star.style.left = Math.random() * 100 + "%"
//   star.style.animationDelay = Math.random() * 2 + "s"
//   document.querySelector(".stars-container").appendChild(star)

//   setTimeout(() => {
//     if (star.parentNode) {
//       star.parentNode.removeChild(star)
//     }
//   }, 3000)
// }

// function startTreeAnimations() {
//   // Create heart-shaped tree
//   createHeartTree()

//   // Create falling hearts
//   const fallingHeartsContainer = document.getElementById("fallingHearts")
//   const colors = ["#ff69b4", "#ff1493", "#dc143c", "#ff6347", "#ffa500", "#ffd700"]

//   function createFallingHeart() {
//     const heart = document.createElement("div")
//     heart.className = "falling-heart"
//     heart.textContent = "💖"
//     heart.style.left = Math.random() * 100 + "%"
//     heart.style.color = colors[Math.floor(Math.random() * colors.length)]
//     heart.style.animationDelay = Math.random() * 2 + "s"
//     fallingHeartsContainer.appendChild(heart)

//     setTimeout(() => {
//       if (heart.parentNode) {
//         heart.parentNode.removeChild(heart)
//       }
//     }, 4000)
//   }

//   // Create sparkles
//   const sparklesContainer = document.getElementById("sparkles")
//   function createSparkle() {
//     const sparkle = document.createElement("div")
//     sparkle.className = "sparkle"
//     sparkle.textContent = "✨"
//     sparkle.style.left = 20 + Math.random() * 60 + "%"
//     sparkle.style.top = 20 + Math.random() * 60 + "%"
//     sparkle.style.animationDelay = Math.random() * 2 + "s"
//     sparklesContainer.appendChild(sparkle)

//     setTimeout(() => {
//       if (sparkle.parentNode) {
//         sparkle.parentNode.removeChild(sparkle)
//       }
//     }, 2000)
//   }

//   // Start animations
//   const heartInterval = setInterval(createFallingHeart, 800)
//   const sparkleInterval = setInterval(createSparkle, 1500)

//   // Clean up when leaving section
//   setTimeout(() => {
//     clearInterval(heartInterval)
//     clearInterval(sparkleInterval)
//   }, 30000)
// }

// function createHeartTree() {
//   const heartTree = document.getElementById("heartTree")
//   if (!heartTree) return

//   heartTree.innerHTML = "" // Clear existing hearts

//   const colors = ["pink", "red", "purple", "orange", "yellow", "green", "blue", "magenta"]
//   const heartCount = 45

//   for (let i = 0; i < heartCount; i++) {
//     const heartLeaf = document.createElement("div")
//     heartLeaf.className = `heart-leaf ${colors[Math.floor(Math.random() * colors.length)]}`
//     heartLeaf.textContent = "💖"
//     heartLeaf.style.animationDelay = Math.random() * 3 + "s"

//     // Add click effect
//     heartLeaf.addEventListener("click", () => {
//       heartLeaf.style.transform = "scale(1.5)"
//       setTimeout(() => {
//         heartLeaf.style.transform = ""
//       }, 300)
//     })

//     heartTree.appendChild(heartLeaf)
//   }
// }

// // Gift button functionality
// document.querySelector(".gift-btn").addEventListener("click", () => {
//   alert("🎁 Special surprise coming soon! This could link to a video message, special photo, or another surprise! 💕")
// })

// // Keyboard navigation
// document.addEventListener("keydown", (e) => {
//   if (e.key === "ArrowLeft" && currentSection > 0) {
//     showSection(currentSection - 1)
//   } else if (e.key === "ArrowRight" && currentSection < sections.length - 1) {
//     showSection(currentSection + 1)
//   } else if (e.key === "Escape") {
//     closeModal()
//   }
// })

// // Touch/swipe support for mobile
// let touchStartX = 0
// let touchEndX = 0

// document.addEventListener("touchstart", (e) => {
//   touchStartX = e.changedTouches[0].screenX
// })

// document.addEventListener("touchend", (e) => {
//   touchEndX = e.changedTouches[0].screenX
//   handleSwipe()
// })

// function handleSwipe() {
//   const swipeThreshold = 50
//   const diff = touchStartX - touchEndX

//   if (Math.abs(diff) > swipeThreshold) {
//     if (diff > 0 && currentSection < sections.length - 1) {
//       // Swipe left - next section
//       showSection(currentSection + 1)
//     } else if (diff < 0 && currentSection > 0) {
//       // Swipe right - previous section
//       showSection(currentSection - 1)
//     }
//   }
// }

// // Smooth scrolling for better UX
// document.documentElement.style.scrollBehavior = "smooth"

// // Add loading animation
// window.addEventListener("load", () => {
//   document.body.style.opacity = "0"
//   document.body.style.transition = "opacity 0.5s ease-in-out"

//   setTimeout(() => {
//     document.body.style.opacity = "1"
//   }, 100)
// })

// Global variables
// Global variables
let currentSection = 0
let currentMessage = 0
let currentPhoto = 0
let currentQuestion = 0
let quizScore = 0
let selectedAnswer = null
let isPlaying = false
let isMuted = false

// Data
const messages = [
  {
    text: "19 years ago, the world got blessed with the most beautiful soul, and I had no idea that one day, that soul would become the center of my world. I genuinely believe that every moment, every decision, every silly little thing in my life somehow led me to you—and I wouldn't change a single second of that journey. You make my life better just by being in it, and I hope today you feel even a fraction of the love you give out every day",
    author: "Your loving boyfriend",
  },
  {
    text: "Your smile is my favorite notification, your laugh is my favorite song, and your happiness is my favorite mission. Happy 19th birthday, beautiful! 😍",
    author: "Forever yours",
  },
  {
    text: "Every day with you feels like a fairytale. Thank you for being the princess who chose to share her kingdom with me. You're not just my girlfriend, you're my best friend, my partner in crime, my safe haven, and my greatest adventure all rolled into one amazing person. 💕",
    author: "Your biggest fan",
  },
  {
    text: "From the moment you walked into my life, everything changed for the better. You brought colors I never knew existed and showed me what true happiness feels like. Your kindness touches everyone around you, your intelligence inspires me daily, and your love makes me the luckiest person alive. 🌈✨",
    author: "With all my love",
  },
  {
    text: "You deserve all the stars in the sky, all the flowers in the world, and all the love in my heart. Today we celebrate not just your birthday, but the incredible person you've become and all the joy you bring to everyone around you. 🌟",
    author: "Your prince",
  },
  {
    text: "Thank you for being you - for your beautiful heart, your infectious laughter, your gentle spirit, and your amazing ability to make every ordinary moment feel extraordinary. Here's to another year of adventures, inside jokes, and endless love. 🍀💖",
    author: "Grateful for you",
  },
]

const quizQuestions = [
  {
    question: "What's my favorite thing about you?",
    options: ["Your beautiful smile", "Your kind heart", "Your amazing laugh", "Everything about you"],
    correct: 3,
    explanation: "How could I choose just one thing? You're perfect in every way! 💕",
  },
  {
    question: "What was our first date?",
    options: ["Coffee shop", "Movie theater", "Park walk", "Restaurant"],
    correct: 0,
    explanation: "That little coffee shop where we talked for hours and I knew you were special ☕",
  },
  {
    question: "What's your favorite color?",
    options: ["Pink", "Purple", "Blue", "Yellow"],
    correct: 1,
    explanation: "Purple, just like the beautiful sunset we watched together 💜",
  },
  {
    question: "What's our special song?",
    options: ["Perfect by Ed Sheeran", "All of Me by John Legend", "Thinking Out Loud", "A Thousand Years"],
    correct: 1,
    explanation: "Because you truly are all of me, and I'm all of you 🎵",
  },
  {
    question: "What do you love most about our relationship?",
    options: ["The laughs we share", "How comfortable we are", "Our deep conversations", "All of the above"],
    correct: 3,
    explanation: "We have something truly special - laughter, comfort, and deep connection 💑",
  },
]

// Updated photos array with working placeholder and fallback images
const photos = [
  {
    src: "./photo/photo1.jpg",
    fallback: "https://via.placeholder.com/600x400/ff69b4/ffffff?text=Photo+1+💕",
    caption: "Our first date at the coffee shop ☕",
    date: "March 15, 2024",
  },
  {
    src: "./photo/photo2.jpg",
    fallback: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Photo+2+🌅",
    caption: "Beach vacation memories 🏖️",
    date: "Summer 2024",
  },
  {
    src: "./photo/photo3.jpg",
    fallback: "https://via.placeholder.com/600x400/22c55e/ffffff?text=Photo+3+😂",
    caption: "You always make me laugh until my cheeks hurt! 😂",
    date: "Pure joy",
  },
  {
    src: "./photo/photo4.jpg",
    fallback: "https://via.placeholder.com/600x400/f59e0b/ffffff?text=Photo+4+✨",
    caption: "Our fancy dinner date - you looked absolutely stunning! ✨",
    date: "Dressed to impress",
  },
  {
    src: "./photo/photo5.jpg",
    fallback: "https://via.placeholder.com/600x400/06b6d4/ffffff?text=Photo+5+🥾",
    caption: "Adventure buddies for life! 🥾",
    date: "Exploring together",
  },
  {
    src: "./photo/photo6.jpg",
    fallback: "https://via.placeholder.com/600x400/ec4899/ffffff?text=Photo+6+🍿",
    caption: "Cozy movie nights are my favorite with you 🍿",
    date: "Perfect evening",
  },
]

const sections = ["countdown", "tree", "messages", "quiz", "gallery"]

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
  initializeCountdown()
  initializeNavigation()
  initializeMessages()
  initializeQuiz()
  initializeGallery()
  initializeMusicPlayer()
  initializeAnimations()

  // Start with countdown section
  showSection(0)
})

// Countdown Timer
function initializeCountdown() {
  function updateCountdown() {
    const targetDate = new Date("2025-07-22T00:00:00").getTime()
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      document.getElementById("days").textContent = days.toString().padStart(2, "0")
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0")
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0")
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0")
    } else {
      document.getElementById("days").textContent = "00"
      document.getElementById("hours").textContent = "00"
      document.getElementById("minutes").textContent = "00"
      document.getElementById("seconds").textContent = "00"
    }
  }

  updateCountdown()
  setInterval(updateCountdown, 1000)
}

// Navigation
function initializeNavigation() {
  const navBtns = document.querySelectorAll(".nav-btn")
  const prevBtn = document.getElementById("prevSection")
  const nextBtn = document.getElementById("nextSection")

  navBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => showSection(index))
  })

  prevBtn.addEventListener("click", () => {
    if (currentSection > 0) {
      showSection(currentSection - 1)
    }
  })

  nextBtn.addEventListener("click", () => {
    if (currentSection < sections.length - 1) {
      showSection(currentSection + 1)
    }
  })
}

function showSection(index) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active")
  })

  // Show target section
  document.getElementById(sections[index]).classList.add("active")

  // Update navigation
  document.querySelectorAll(".nav-btn").forEach((btn, i) => {
    btn.classList.toggle("active", i === index)
  })

  // Update section navigation buttons
  document.getElementById("prevSection").disabled = index === 0
  document.getElementById("nextSection").disabled = index === sections.length - 1

  currentSection = index

  // Initialize section-specific features
  if (sections[index] === "tree") {
    startTreeAnimations()
  } else if (sections[index] === "messages") {
    startTypewriter()
  }
}

// Messages Section
function initializeMessages() {
  const prevBtn = document.getElementById("prevMessage")
  const nextBtn = document.getElementById("nextMessage")

  prevBtn.addEventListener("click", () => {
    currentMessage = (currentMessage - 1 + messages.length) % messages.length
    showMessage()
  })

  nextBtn.addEventListener("click", () => {
    currentMessage = (currentMessage + 1) % messages.length
    showMessage()
  })

  createMessageDots()
  showMessage()
}

function createMessageDots() {
  const dotsContainer = document.getElementById("messageDots")
  dotsContainer.innerHTML = ""

  messages.forEach((_, index) => {
    const dot = document.createElement("div")
    dot.className = "message-dot"
    if (index === currentMessage) dot.classList.add("active")
    dot.addEventListener("click", () => {
      currentMessage = index
      showMessage()
    })
    dotsContainer.appendChild(dot)
  })
}

function showMessage() {
  // Update dots
  document.querySelectorAll(".message-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentMessage)
  })

  // Start typewriter effect
  startTypewriter()
}

function startTypewriter() {
  const messageText = document.getElementById("messageText")
  const messageAuthor = document.getElementById("messageAuthor")
  const message = messages[currentMessage]

  messageText.textContent = ""
  messageAuthor.textContent = message.author

  let index = 0
  const typeInterval = setInterval(() => {
    if (index < message.text.length) {
      messageText.textContent += message.text[index]
      index++
    } else {
      clearInterval(typeInterval)
    }
  }, 50)
}

// Quiz Section
function initializeQuiz() {
  document.getElementById("restartBtn").addEventListener("click", resetQuiz)
  showQuestion()
}

function showQuestion() {
  const question = quizQuestions[currentQuestion]

  document.getElementById("currentQ").textContent = currentQuestion + 1
  document.getElementById("totalQ").textContent = quizQuestions.length
  document.getElementById("currentScore").textContent = quizScore
  document.getElementById("questionText").textContent = question.question

  // Create progress dots
  const progressDots = document.getElementById("progressDots")
  progressDots.innerHTML = ""
  quizQuestions.forEach((_, index) => {
    const dot = document.createElement("div")
    dot.className = "progress-dot"
    if (index <= currentQuestion) dot.classList.add("completed")
    progressDots.appendChild(dot)
  })

  // Create options
  const optionsContainer = document.getElementById("optionsContainer")
  optionsContainer.innerHTML = ""

  question.options.forEach((option, index) => {
    const optionBtn = document.createElement("button")
    optionBtn.className = "option-btn"
    optionBtn.innerHTML = `
            <div class="option-radio"></div>
            <span>${option}</span>
        `
    optionBtn.addEventListener("click", () => selectAnswer(index))
    optionsContainer.appendChild(optionBtn)
  })

  // Hide explanation and next button
  document.getElementById("explanation").style.display = "none"
  document.getElementById("nextBtn").style.display = "none"
  selectedAnswer = null
}

function selectAnswer(answerIndex) {
  if (selectedAnswer !== null) return // Already answered

  selectedAnswer = answerIndex
  const question = quizQuestions[currentQuestion]
  const options = document.querySelectorAll(".option-btn")

  options.forEach((option, index) => {
    const radio = option.querySelector(".option-radio")
    if (index === answerIndex) {
      option.classList.add("selected")
      radio.classList.add("selected")
    }
    option.disabled = true
  })

  // Show correct answer
  setTimeout(() => {
    options[question.correct].classList.add("correct")
    if (answerIndex !== question.correct) {
      options[answerIndex].classList.add("incorrect")
    } else {
      quizScore++
      document.getElementById("currentScore").textContent = quizScore
    }

    // Show explanation
    const explanation = document.getElementById("explanation")
    explanation.innerHTML = `
            <div class="explanation-icon">⭐</div>
            <p>${question.explanation}</p>
        `
    explanation.style.display = "flex"

    // Show next button
    const nextBtn = document.getElementById("nextBtn")
    nextBtn.textContent = currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"
    nextBtn.style.display = "block"
    nextBtn.onclick = nextQuestion
  }, 1000)
}

function nextQuestion() {
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++
    showQuestion()
  } else {
    showQuizComplete()
  }
}

function showQuizComplete() {
  document.getElementById("quizContainer").style.display = "none"
  document.getElementById("quizComplete").style.display = "block"

  // Show final score
  document.getElementById("finalScore").textContent = `${quizScore}/${quizQuestions.length}`

  // Show score message
  const percentage = (quizScore / quizQuestions.length) * 100
  let message
  if (percentage === 100) message = "Perfect! You know us so well! 🥰"
  else if (percentage >= 80) message = "Amazing! You're definitely paying attention! 😍"
  else if (percentage >= 60) message = "Great job! You know me pretty well! 😊"
  else message = "We need to spend more time together! 😉"

  document.getElementById("scoreMessage").textContent = message

  // Create confetti
  createConfetti()
}

function createConfetti() {
  const confetti = document.getElementById("confetti")
  confetti.innerHTML = ""

  for (let i = 0; i < 50; i++) {
    const piece = document.createElement("div")
    piece.className = "confetti-piece"
    piece.textContent = Math.random() > 0.5 ? "🎉" : "💖"
    piece.style.left = Math.random() * 100 + "%"
    piece.style.animationDelay = Math.random() * 2 + "s"
    confetti.appendChild(piece)
  }
}

function resetQuiz() {
  currentQuestion = 0
  quizScore = 0
  selectedAnswer = null
  document.getElementById("quizContainer").style.display = "block"
  document.getElementById("quizComplete").style.display = "none"
  showQuestion()
}

// Gallery Section with improved error handling
function initializeGallery() {
  const prevBtn = document.getElementById("prevPhoto")
  const nextBtn = document.getElementById("nextPhoto")
  const modalClose = document.getElementById("modalClose")
  const modalPrev = document.getElementById("modalPrev")
  const modalNext = document.getElementById("modalNext")

  prevBtn.addEventListener("click", () => {
    currentPhoto = (currentPhoto - 1 + photos.length) % photos.length
    showPhoto()
  })

  nextBtn.addEventListener("click", () => {
    currentPhoto = (currentPhoto + 1) % photos.length
    showPhoto()
  })

  modalClose.addEventListener("click", closeModal)
  modalPrev.addEventListener("click", () => {
    currentPhoto = (currentPhoto - 1 + photos.length) % photos.length
    showPhoto()
    updateModal()
  })

  modalNext.addEventListener("click", () => {
    currentPhoto = (currentPhoto + 1) % photos.length
    showPhoto()
    updateModal()
  })

  // Close modal on background click
  document.getElementById("photoModal").addEventListener("click", (e) => {
    if (e.target.id === "photoModal") {
      closeModal()
    }
  })

  createPhotoDots()
  createThumbnails()
  showPhoto()
}

function createPhotoDots() {
  const dotsContainer = document.getElementById("photoDots")
  dotsContainer.innerHTML = ""

  photos.forEach((_, index) => {
    const dot = document.createElement("div")
    dot.className = "photo-dot"
    if (index === currentPhoto) dot.classList.add("active")
    dot.addEventListener("click", () => {
      currentPhoto = index
      showPhoto()
    })
    dotsContainer.appendChild(dot)
  })
}

function createThumbnails() {
  const thumbnailGrid = document.getElementById("thumbnailGrid")
  thumbnailGrid.innerHTML = ""

  photos.forEach((photo, index) => {
    const thumbnail = document.createElement("div")
    thumbnail.className = "thumbnail"
    if (index === currentPhoto) thumbnail.classList.add("active")

    const img = document.createElement("img")
    img.src = photo.src
    img.alt = photo.caption

    // Add error handling for thumbnails
    img.onerror = function () {
      this.src = photo.fallback
    }

    thumbnail.appendChild(img)

    const overlay = document.createElement("div")
    overlay.className = "thumbnail-overlay"
    thumbnail.appendChild(overlay)

    thumbnail.addEventListener("click", () => {
      currentPhoto = index
      showPhoto()
      openModal()
    })

    thumbnailGrid.appendChild(thumbnail)
  })
}

function showPhoto() {
  const photo = photos[currentPhoto]
  const mainPhotoImg = document.getElementById("mainPhoto")

  // Set the main photo with error handling
  mainPhotoImg.src = photo.src
  mainPhotoImg.onerror = function () {
    this.src = photo.fallback
  }

  document.getElementById("photoCaption").textContent = photo.caption
  document.getElementById("photoDate").textContent = photo.date

  // Update dots
  document.querySelectorAll(".photo-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentPhoto)
  })

  // Update thumbnails
  document.querySelectorAll(".thumbnail").forEach((thumb, index) => {
    thumb.classList.toggle("active", index === currentPhoto)
  })

  // Add click event to main photo
  document.querySelector(".photo-container").onclick = () => openModal()
}

function openModal() {
  const modal = document.getElementById("photoModal")
  modal.classList.add("active")
  updateModal()
}

function closeModal() {
  const modal = document.getElementById("photoModal")
  modal.classList.remove("active")
}

function updateModal() {
  const photo = photos[currentPhoto]
  const modalImg = document.getElementById("modalImage")

  modalImg.src = photo.src
  modalImg.onerror = function () {
    this.src = photo.fallback
  }

  document.getElementById("modalCaption").textContent = photo.caption
  document.getElementById("modalDate").textContent = photo.date
}

// Music Player
function initializeMusicPlayer() {
  const playBtn = document.getElementById("playBtn")
  const muteBtn = document.getElementById("muteBtn")
  const audio = document.getElementById("backgroundMusic")

  // Set initial volume
  if (audio) {
    audio.volume = 0.3 // Set to 30% volume so it's not too loud
  }

  playBtn.addEventListener("click", togglePlay)
  muteBtn.addEventListener("click", toggleMute)
}

function togglePlay() {
  const audio = document.getElementById("backgroundMusic")
  const playIcon = document.querySelector(".play-icon")
  const pauseIcon = document.querySelector(".pause-icon")
  const musicIndicator = document.getElementById("musicIndicator")

  if (!audio) {
    console.log("No audio element found")
    return
  }

  if (isPlaying) {
    // Pause the music
    audio.pause()
    playIcon.style.display = "block"
    pauseIcon.style.display = "none"
    musicIndicator.style.display = "none"
    isPlaying = false
  } else {
    // Play the music
    audio
      .play()
      .then(() => {
        playIcon.style.display = "none"
        pauseIcon.style.display = "block"
        musicIndicator.style.display = "flex"
        isPlaying = true
      })
      .catch((error) => {
        console.log("Autoplay prevented by browser:", error)
        // Show a message to user that they need to interact first
        alert("Please click the play button to start the music! 🎵")
      })
  }
}

function toggleMute() {
  const audio = document.getElementById("backgroundMusic")
  const volumeIcon = document.querySelector(".volume-icon")
  const muteIcon = document.querySelector(".mute-icon")

  if (!audio) return

  if (isMuted) {
    // Unmute
    audio.muted = false
    volumeIcon.style.display = "block"
    muteIcon.style.display = "none"
    isMuted = false
  } else {
    // Mute
    audio.muted = true
    volumeIcon.style.display = "none"
    muteIcon.style.display = "block"
    isMuted = true
  }
}

// Animations
function initializeAnimations() {
  createStars()
  setInterval(createStars, 300)
}

function createStars() {
  const star = document.createElement("div")
  star.className = "star"
  star.style.left = Math.random() * 100 + "%"
  star.style.animationDelay = Math.random() * 2 + "s"
  document.querySelector(".stars-container").appendChild(star)

  setTimeout(() => {
    if (star.parentNode) {
      star.parentNode.removeChild(star)
    }
  }, 3000)
}

function startTreeAnimations() {
  // Create heart-shaped tree
  createHeartTree()

  // Create falling hearts
  const fallingHeartsContainer = document.getElementById("fallingHearts")
  const colors = ["#ff69b4", "#ff1493", "#dc143c", "#ff6347", "#ffa500", "#ffd700"]

  function createFallingHeart() {
    const heart = document.createElement("div")
    heart.className = "falling-heart"
    heart.textContent = "💖"
    heart.style.left = Math.random() * 100 + "%"
    heart.style.color = colors[Math.floor(Math.random() * colors.length)]
    heart.style.animationDelay = Math.random() * 2 + "s"
    fallingHeartsContainer.appendChild(heart)

    setTimeout(() => {
      if (heart.parentNode) {
        heart.parentNode.removeChild(heart)
      }
    }, 4000)
  }

  // Create sparkles
  const sparklesContainer = document.getElementById("sparkles")
  function createSparkle() {
    const sparkle = document.createElement("div")
    sparkle.className = "sparkle"
    sparkle.textContent = "✨"
    sparkle.style.left = 20 + Math.random() * 60 + "%"
    sparkle.style.top = 20 + Math.random() * 60 + "%"
    sparkle.style.animationDelay = Math.random() * 2 + "s"
    sparklesContainer.appendChild(sparkle)

    setTimeout(() => {
      if (sparkle.parentNode) {
        sparkle.parentNode.removeChild(sparkle)
      }
    }, 2000)
  }

  // Start animations
  const heartInterval = setInterval(createFallingHeart, 800)
  const sparkleInterval = setInterval(createSparkle, 1500)

  // Clean up when leaving section
  setTimeout(() => {
    clearInterval(heartInterval)
    clearInterval(sparkleInterval)
  }, 30000)
}

function createHeartTree() {
  const heartTree = document.getElementById("heartTree")
  if (!heartTree) return

  heartTree.innerHTML = "" // Clear existing hearts

  const colors = ["pink", "red", "purple", "orange", "yellow", "green", "blue", "magenta"]
  const heartCount = 45

  for (let i = 0; i < heartCount; i++) {
    const heartLeaf = document.createElement("div")
    heartLeaf.className = `heart-leaf ${colors[Math.floor(Math.random() * colors.length)]}`
    heartLeaf.textContent = "💖"
    heartLeaf.style.animationDelay = Math.random() * 3 + "s"

    // Add click effect
    heartLeaf.addEventListener("click", () => {
      heartLeaf.style.transform = "scale(1.5)"
      setTimeout(() => {
        heartLeaf.style.transform = ""
      }, 300)
    })

    heartTree.appendChild(heartLeaf)
  }
}

// Gift button functionality
document.querySelector(".gift-btn").addEventListener("click", () => {
  alert("🎁 Special surprise coming soon! This could link to a video message, special photo, or another surprise! 💕")
})

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && currentSection > 0) {
    showSection(currentSection - 1)
  } else if (e.key === "ArrowRight" && currentSection < sections.length - 1) {
    showSection(currentSection + 1)
  } else if (e.key === "Escape") {
    closeModal()
  }
})

// Touch/swipe support for mobile
let touchStartX = 0
let touchEndX = 0

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX
})

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
})

function handleSwipe() {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0 && currentSection < sections.length - 1) {
      // Swipe left - next section
      showSection(currentSection + 1)
    } else if (diff < 0 && currentSection > 0) {
      // Swipe right - previous section
      showSection(currentSection - 1)
    }
  }
}

// Smooth scrolling for better UX
document.documentElement.style.scrollBehavior = "smooth"

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease-in-out"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})

