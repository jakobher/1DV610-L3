class DataFormatter {
  formatPaceForDisplay(pace) {
    const minutes = Math.floor(pace)
    const seconds = Math.round((pace - minutes) * 60)
    if (seconds === 60) {
      return `${minutes + 1}:00 min/km`
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')} min/km`
  }

  formatSpeedForDisplay(speed) {
    return `${speed.toFixed(1)} km/h`
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
      vo2Max: profile.vo2Max,
    }
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
        message: 'Your goal is achievable based on your recent performance',
        icon: '✅',
      }
    }
    return {
      status: 'Challenging',
      message: 'Your goal may be challenging based on your recent performance',
      icon: '⚠️',
    }
  }

  formatTrainingDaysList(trainingPlan) {
    return trainingPlan
      .filter((day) => day.workout !== 'Rest')
      .map((day) => day.workout)
      .join('\n')
  }

  formatTrainingDistance(distanceData) {
    return `${distanceData.min.toFixed(1)}-${distanceData.max.toFixed(1)} km `
  }
}
export default DataFormatter
