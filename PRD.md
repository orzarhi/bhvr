# 📄 Product Requirements Document – **ZARHINIO**

## 1. Overview

**ZARHINIO** is an intelligent, personalized learning assistant that adapts to a student's learning style. By leveraging a team of specialized AI agents, the system provides tailored explanations for any given question—visually, textually, interactively, and analytically.

---

## 2. Goals

- Deliver personalized explanations to students based on preferred learning styles.
- Improve understanding and retention through multi-modal content.
- Learn from user behavior to optimize future interactions.

---

## 3. Target Users

| User Type | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| Student   | Asks questions, consumes learning content, provides feedback       |
| Educator  | Views learning analytics, tracks student progress (future feature) |

---

## 4. Core Features

### 4.1 Learning Agents (AI Team)

| Agent Type        | Description                                                                            |
| ----------------- | -------------------------------------------------------------------------------------- |
| Visual Agent      | Generates diagrams, flowcharts, or visual metaphors using tools like DALL·E or Mermaid |
| Verbal Agent      | Produces clear, text-based explanations with real-world examples                       |
| Interactive Agent | Builds short quizzes or mini-simulations for hands-on understanding                    |
| Personal Agent    | Selects the most effective response type based on student history/preferences          |

---

### 4.2 User Interface

- **Input box** to enter a question (e.g., “What is recursion?”)
- **Response Tabs or Cards** showing responses from each agent
- **Rating mechanism** for each response (👍/👎 or stars)
- **Learning Preference Profile** that evolves with user interactions

---

## 5. Technical Architecture

### Frontend

- Fronted: React
- UI: TailwindCSS + shadcn/ui
- State Management: `Zustand` or React Context
- Component: Multi-tab view per agent, quiz component, progress bar

### Backend

- Language: hono (API routes or server actions)
- Database: Supabase (for storing questions, responses, user profiles, quiz results)
- AI Services: OpenAI API (GPT-4, DALL·E, Whisper if needed)
- Optional: Redis queue or edge functions for parallel agent execution

---

## 6. User Journey

1. Student enters a question.
2. System triggers all agents in parallel or in sequence.
3. Each agent returns a different response format.
4. Student rates each format (stored in profile).
5. Over time, Personal Agent prioritizes most helpful formats.

---

## 7. MVP Scope

✅ Submit a question
✅ View agent responses
✅ Rate responses
✅ Store and retrieve user preferences
✅ Simple quiz from Interactive Agent
✅ Visuals from Visual Agent (using static or AI-generated images)

---

## 8. Stretch Features (Post-MVP)

- 📊 Progress tracking dashboard
- 🔊 Text-to-speech (audio playback of explanations)
- 🎯 Adaptive question suggestions based on knowledge gaps
- 🧑‍🏫 Teacher dashboard (for group/class usage)

---

## 9. Success Metrics

- Average response rating per agent
- Increase in correct answers post-agent quiz
- Engagement rate (questions per session)
- Retention of preferred learning styles

---

רוצה שאכין לך מזה גם מסמך PDF מעוצב? או אולי wireframe ראשוני לממשק?
