class DataFormatter {
  formatPaceForDisplay(pace) {
    const minutes = Math.floor(pace)
    const seconds = Math.round((pace - minutes) * 60)
    if (seconds === 60) {
      return `${minutes + 1}:00 min/km`
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')} min/km`
  }

  formatTimeInMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60)
    let minutes = Math.floor(totalMinutes % 60)
    let seconds = Math.round((totalMinutes - Math.floor(totalMinutes)) * 60)
    
    if (seconds === 60) {
      minutes += 1
      seconds = 0
    }

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`
    }
    return `${minutes}m ${seconds}s`
  }

  formatHeartRateZone(zone) {
    return `${zone.min} - ${zone.max} bpm`
  }

  createProfileSummary(profile) {
    return {
      age: profile.age,
      gender: profile.gender,
      restingHeartRate: profile.restingHR,
      maxHeartRate: profile.maxHR,
      vo2Max: profile.vo2Max
    }
  }

  createGoalStatement(targetDistance, targetTime, requiredPace) {
    const formattedTime = this.formatTimeInMinutes(targetTime)
    const formattedPace = this.formatPaceForDisplay(requiredPace)
    return `Complete ${targetDistance}km in ${formattedTime} (${formattedPace} pace)`
  }

  formatDistanceName(distance) {
    const distanceMap = {
      5: '5K',
      10: '10K',
      21.1: 'Half Marathon',
      42.2: 'Marathon',
    }
    return distanceMap[distance] || `${distance}km`
  }

  createRealisticAssessment(isRealistic) {
    if (isRealistic) {
      return {
        status: 'Realistic',
        message: 'Your goal is achievable based on your current fitness level.',
        color: 'green',
      }
    }
    return {
      status: 'Challenging',
      message:
        'Your goal is ambitious but may require significant effort and training.',
      color: 'orange',
    }
  }

  formatTrainingDaysList(trainingPlan) {
    return trainingPlan
      .filter((day) => day.workout !== 'Rest')
      .map((day) => `${day.day}: ${day.workout}`)
      .join('\n')
  }
}
export default DataFormatter
