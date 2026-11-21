// Q7. Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

// Convert to lowercase so the check is case-insensitive
const lowerFeedback = feedback.toLowerCase();
const hasNegativeWords =
    lowerFeedback.includes("bad") ||
    lowerFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (hasNegativeWords) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
