import { FitnessAnalyzer, RacePredictor, TrainingPlanGenerator, RunningCalculator } from 'running-toolkit'
class RunningToolkitAdapter {
  constructor() {
    this.fitness = new FitnessAnalyzer()
    this.predictor = new RacePredictor()
    this.planner = new TrainingPlanGenerator()
    this.calc = new RunningCalculator()
  }

  analyzeProfile(profileData) {
    const { gender, age, activityLevel } = profileData
    return this.fitness.createCompleteProfile(gender, age, activityLevel)
  }

  predictAllDistances(knownDistance, knownTime) {
    const distances = [5, 10, 21.1, 42.2]
    return distances.map((dist) => ({
      distance: dist,
      time: this.predictor.predictRaceTime(knownDistance, knownTime, dist),
    }))
  }

  assessGoalRealism(goalData) {
    const { knownDistance, knownTime, targetDistance, targetTime } = goalData
    const predictedForGoal = this.predictor.predictRaceTime(knownDistance, knownTime, targetDistance)
    return predictedForGoal <= targetTime
  }

  generateTrainingPlan(runningDaysPerWeek) {
    return this.planner.generateWeeklyRunningPlan(runningDaysPerWeek)
  }

  calculateRequiredPace(targetDistance, targetTime) {
    return this.calc.calculatePace(targetDistance, targetTime)
  }

  calculateCurrentPace(knownDistance, knownTime) {
    return this.calc.calculatePace(knownDistance, knownTime)
  }

  calculateSpeed(pace) {
    return this.calc.paceToSpeed(pace)
  }

  describePulseZones() {
    return this.fitness.describePulseZones()
  }

  calculateTrainingDistances(targetDistance) {
    return {
      easyRun: {
        min: targetDistance * 0.4,
        max: targetDistance * 0.6,
        description: 'Easy Run',
      },
      tempoRun: {
        min: targetDistance * 0.6,
        max: targetDistance * 0.8,
        description: 'Tempo Run',
      },
      longRun: {
        min: targetDistance * 0.8,
        max: targetDistance * 1.0,
        description: 'Long Run',
      },
      intervals: {
        min: targetDistance * 0.3,
        max: targetDistance * 0.5,
        description: 'Interval Training',
      },
    }
  }
}

export default RunningToolkitAdapter
