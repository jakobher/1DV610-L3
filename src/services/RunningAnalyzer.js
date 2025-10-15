import { FitnessAnalyzer, RacePredictor, TrainingPlanGenerator, RunningCalculator } from 'running-toolkit'
class RunningAnalyzer {
  constructor() {
    this.fitness = new FitnessAnalyzer()
    this.predictor = new RacePredictor()
    this.planner = new TrainingPlanGenerator()
    this.calc = new RunningCalculator()
  }

  analyzeProfile(gender, age, activityLevel) {
    return this.fitness.createCompleteProfile(gender, age, activityLevel)
  }

  predictAllDistances(knownDistance, knownTime) {
    const distances = [5, 10, 21.1, 42.2]
    return distances.map((dist) => ({
      distance: dist,
      time: this.predictor.predictRaceTime(knownDistance, knownTime, dist),
    }))
  }

  assessGoalRealism(knownDistance, knownTime, targetDistance, targetTime) {
    const predictedForGoal = this.predictor.predictRaceTime(knownDistance, knownTime, targetDistance)
    return predictedForGoal <= targetTime
  }

  generateTrainingPlan(runningDaysPerWeek) {
    return this.planner.generateWeeklyRunningPlan(runningDaysPerWeek)
  }

  calculateRequiredPace(targetDistance, targetTime) {
    return this.calc.calculatePace(targetDistance, targetTime)
  }

  describePulseZones() {
    return this.fitness.describePulseZones()
  }
}

export default RunningAnalyzer
