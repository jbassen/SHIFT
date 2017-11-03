export function nextActivity() {
  return {
    type: 'NEXT_ACTIVITY'
  }
}

export function gradeActivity(answer) {
  return {
    type: 'GRADE_ACTIVITY',
    answer: answer
  }
}
