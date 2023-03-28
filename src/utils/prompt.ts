export const articlePromptHighlight = `Please use the above to summarize the highlights.`
export const pagePromptHighlight = `Summarize the highlights of the content and output a useful summary in a few sentences.`
export const googlePatentsPromptHighlight = `Please summarize the highlights of the above article in easy-to-understand terms`
export const pageSummaryPromptHighlight = `Summarize the highlights of the content and output a useful summary in a few sentences.`
export const videoSummaryPromptHightligt = `Summarize the above content highlights.`
export const searchPromptHighlight = `Using the provided web search results, write a comprehensive reply to the given query. Make sure to cite results using [[number](URL)] notation after the reference. If the provided search results refer to multiple subjects with the same name, write separate answers for each subject. and at last please provide your own insights.`
export const reviewSummaryPromptHightligt = `Give a summary of the reviews of this item according to the above, and add a rating.Your output should use the following template:
#### Rating
#### Summary`
export const customizePrompt = `Title: "{{Title}}"
Transcript: "{{Transcript}}"`

export const customizePromptSearch = `Web search results: {{Search Results}}`

export const customizePromptPage = `Content: {{content}}`

export const customizePrompt1 = `Your output should use the following template:
#### Summary
#### Highlights
- [Emoji] Bulletpoint

Your task is to summarise the text I have given you in up to seven concise bullet points, starting with a short highlight. Choose an appropriate emoji for each bullet point. Use the text above: {{Title}} {{Transcript}}.
`

export const customizePromptClickbait = `What is the clickbait likelihood of the title and transcript for this video? Please provide a score and a brief explanation for your score, the clickbait score is up to 10, if the clickbait score is less than 5 then answer: 👍 Clickbait Score : Low, otherwise answer: 👎 Clickbait Score : High.

Example response:
> The lower the Clickbait score, the better.
#### Clickbait Score:
👍 Clickbait Score : Low or 👎 Clickbait Score : High
#### Explanation:
The title is a bit exaggerated.
`

export const replylanguagePrompt = (language: string) => {
  return `Please write in ${language} language.`
}

export const articlePrompt = ({
  title,
  url,
  content,
  language,
  prompt,
}: {
  title: string
  url?: string
  content: string
  language: string
  prompt?: string
}) => {
  return `Title: ${title}
Content:  ${content}
Instructions: ${prompt ? prompt : articlePromptHighlight}
${replylanguagePrompt(language)}`
}

export const videoPrompt = ({
  title,
  transcript,
  language,
  prompt,
}: {
  title: string
  transcript: string
  language: string
  prompt: string
}) => {
  return `Title: ${title}
Transcript: ${transcript}
Instructions: ${prompt}
${replylanguagePrompt(language)}`
}

export const searchPrompt = ({
  query,
  results,
  language,
  prompt,
}: {
  query: string
  results: string
  language: string
  prompt: string
}) => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `Web search results: ${results}
Current date: ${year}/${month}/${day}
Instructions: ${prompt}
Query: ${query}
${replylanguagePrompt(language)}`
}

export const pageSummaryPrompt = ({
  content,
  language,
  prompt,
  rate,
}: {
  content: string
  language: string
  prompt?: string
  rate?: string | null | string
}) => {
  return `Content: ${content}
${rate ? 'Customer Ratings' + rate : ''}
Instructions: ${rate ? reviewSummaryPromptHightligt : prompt ? prompt : pageSummaryPromptHighlight}
${replylanguagePrompt(language)}`
}