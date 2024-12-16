// Parent School Class
class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level; // 'primary', 'middle', or 'high'
      this._numberOfStudents = numberOfStudents;
    }
  
    // Getters
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    // Setter for numberOfStudents
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === 'number') {
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
  
    // Method: quickFacts
    quickFacts() {
      console.log(
        `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
      );
    }
  
    // Static Method: pickSubstituteTeacher
    static pickSubstituteTeacher(substituteTeachers) {
      const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomIndex];
    }
  }
  
  // PrimarySchool Class
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    // Getter for pickupPolicy
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  // HighSchool Class
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    // Getter for sportsTeams
    get sportsTeams() {
      console.log(`Sports Teams: ${this._sportsTeams.join(', ')}`);
      return this._sportsTeams;
    }
  }
  
  // Creating Instances
  // PrimarySchool Instance
  const lorraineHansbury = new PrimarySchool(
    'Lorraine Hansbury',
    514,
    'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
  );
  
  // Calling quickFacts on the PrimarySchool instance
  lorraineHansbury.quickFacts();
  
  // Static method: pickSubstituteTeacher
  const substituteTeachers = [
    'Jamal Crawford',
    'Lou Williams',
    'J. R. Smith',
    'James Harden',
    'Jason Terry',
    'Manu Ginobli',
  ];
  console.log(
    `Substitute Teacher: ${School.pickSubstituteTeacher(substituteTeachers)}`
  );
  
  // HighSchool Instance
  const alSmith = new HighSchool('Al E. Smith', 415, [
    'Baseball',
    'Basketball',
    'Volleyball',
    'Track and Field',
  ]);
  
  alSmith.sportsTeams;
  