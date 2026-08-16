# Project Submission Report

## 1. Student Details

- **Full Name:** Hope Nduta Wanjohi
- **GitHub Username:** HNduta
- **Email:** hope.wanjohi@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** [https://is-project-2026.github.io/studentportfolio-166529/]

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

- **Commit URL:** https://github.com/IS-PROJECT-2026/studentportfolio-166529/commit/b6391df (fix: improve responsive portfolio layout)
- **Why this one?** This commit demonstrates clean Conventional Commit practice because it uses the fix type and a concise, descriptive subject. It clearly communicates that the change addresses a responsive layout problem without making the commit message unnecessarily long.

### B. A Mistake or Struggle

Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke. 

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/studentportfolio-166529/pull/26
- **What happened and how did you recover?** During the development of the initial project structure, I realised that the work needed to be reorganised and tracked more clearly through the GitHub issue and pull request workflow. I corrected this by restructuring the work on a separate feature branch, reviewing the changes through a pull request, and merging the corrected implementation into main. This experience reinforced the importance of defining tasks clearly before starting development and using pull requests to review changes before merging.

### C. A Pull Request You're Proud Of

Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

- **PR URL:** https://github.com/IS-PROJECT-2026/studentportfolio-166529/pull/25
- **What did you check before merging?** Before merging, I reviewed the PR description, verified that the changes were linked to the relevant issue, and inspected the changed files to ensure that the JavaScript interactions worked as intended. I also checked that the diff was focused on the requested functionality before merging the PR.

### D. One Thing You Would Do Differently

If you had to restart this project from scratch with everything you know now, name one specific workflow decision you would change (not a code change — a Git/project management decision).

- **What would you change?** If I were to restart the project, I would break down the initial project setup into smaller, more clearly defined issues before creating the development branches. This would make the work easier to track, reduce overlap between tasks, and make the Git history more organised from the beginning.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/studentportfolio-166529/pull/26

---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.

> **CRITICAL FOR WORKING IMAGES:** Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and **paste (Ctrl+V / Cmd+V)** your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

### A. Milestones and Issues


<img width="1881" height="801" alt="image" src="https://github.com/user-attachments/assets/2f935a10-ba56-489c-8862-52e1f6419c9b" />


* **Caption:** This screenshot shows a project milestone and the development issues assigned to each milestone.

### B. Project Board


<img width="1911" height="847" alt="image" src="https://github.com/user-attachments/assets/d8fecf1e-62b2-4cee-9492-80fade6a8cab" />



* **Caption:** This screenshot shows the project Kanban board with tasks organized across To Do, In Progress, and Done.

### C. Branching Architecture

<img width="1866" height="914" alt="image" src="https://github.com/user-attachments/assets/fddc00b8-db1c-4c5a-a1d6-ea7eeb55153d" />


* **Caption:** This screenshot demonstrates the project's branching architecture, with development work isolated on issue-linked feature, style, fix, and documentation branches rather than being committed directly to main.

### D. Pull Requests & Traceability

<img width="1901" height="938" alt="image" src="https://github.com/user-attachments/assets/892542e3-fcbb-4d41-ac54-6e952bf0a36a" />
<img width="522" height="630" alt="image" src="https://github.com/user-attachments/assets/18565ca5-3f3a-4019-a091-76d3daca9ffa" />



* **Caption:** This pull request implements JavaScript interactions for the platform, including project filtering, mobile navigation, and contact form feedback, and closes Issue #9.

---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?** Same-line modification conflict

#### Step 1: Generating the Clash
*Screenshot showing the merge attempt and the conflict warning.*

<img width="893" height="430" alt="image" src="https://github.com/user-attachments/assets/45f0f484-b033-4716-9341-70c2cce68f77" />

* **Caption:** GitHub detected a merge conflict between feat/15-conflict-same-line and feat/15-conflict-same-line-b because both branches modified the same line in index.html differently. The pull request could not be merged automatically and required manual conflict resolution.

#### Step 2: Inside the Code Editor (Conflict Markers)
*Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor.*

<img width="893" height="194" alt="image" src="https://github.com/user-attachments/assets/0a9ec4e3-b32c-4203-aa97-73c9266960b7" />

* **Caption:** The conflict markers show the two incompatible versions of the same line. I reviewed both changes and selected a final version that preserved the intended portfolio heading before marking the conflict as resolved.]

#### Step 3: Resolution & Clean Merge
*Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.*

<img width="892" height="437" alt="image" src="https://github.com/user-attachments/assets/13809de5-428f-429b-bc2d-e5167b75d144" />


* **Caption:** After removing the conflict markers and committing the resolution, GitHub confirmed that the branches were no longer in conflict. The pull request was then merged successfully.

---

### Conflict 2 — Different Cause

**What cause did you use?** Modify/delete conflict.

**Why does this cause trigger a conflict?** This conflict occurs when one branch deletes a file while another branch modifies the same file. Git cannot automatically determine whether to keep the modified file or honour the deletion, so manual resolution is required.

<img width="895" height="463" alt="image" src="https://github.com/user-attachments/assets/59c37f2d-0211-4c4c-beea-59a98607b95a" />


* **Caption:** GitHub detected a modify/delete conflict because feat/16-conflict-delete deleted js/script.js, while feat/16-conflict-modify modified the same file. GitHub therefore prevented the pull request from being merged automatically and required manual resolution

---

### Conflict 3 — Different Cause

**What cause did you use?** Rename/Modify Conflict

**Why does this cause trigger a conflict?** This conflict occurs when one branch renames a file while another branch modifies the original file. Git cannot automatically reconcile the renamed path with the changes made to the original file, so manual resolution is required.

<img width="894" height="463" alt="image" src="https://github.com/user-attachments/assets/e32c73da-ca97-4ceb-aa92-52c193b391f3" />


* **Caption:** This conflict occurred because feat/16-conflict-rename renamed the CSS file while feat/16-conflict-modify modified the original file. GitHub could not automatically reconcile the renamed path with the changes made to the original file, so the pull request required manual resolution.

---
##
## 6. Feedback & Evaluation

To help improve this course for future engineering cohorts, please take 2 minutes to fill out the anonymous feedback form. Your honest review helps shape how this program is taught next semester!
- [ ] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---
 
## Final Submission
 
Once your repository is complete, submit your work through the official submission form below. The form will **stop accepting responses after Monday, August 17th, 2026** — no late submissions will be accepted.
 
> **Submission Form:** [https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)
