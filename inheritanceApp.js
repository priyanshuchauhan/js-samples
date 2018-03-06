
/**
    Write a class (prototype) in JavaScript, with at least one method, and another class which
    extends the previous class. Make sure that when an instance is created of the latter, it returns
    true for an instanceof-check
    check for both prototypes and that the method on the first prototype can
    be invoked.
**/

export function inheritanceTest() {
    const result = [];

    result.push('Parent class CANDIDATE, child class JOBSEEKER, priyanshu is jobseeker instance');
    function Candidate() {}

    Candidate.prototype.applyForWork = function(){
        result.push('Applied for work: Candidate class function');
    };

    // JobSeeker class
    function JobSeeker() {
        Candidate.call(this);   // Call the parent constructor
    }

    // inherit Candidate
    JobSeeker.prototype = Object.create(Candidate.prototype);

    // correct the constructor pointer because it points to Candidate
    JobSeeker.prototype.constructor = JobSeeker;

    // add sayGoodBye method
    JobSeeker.prototype.applyForJob = function(){
        result.push('Applied for Job: JobSeeker class function');
    };

    const priyanshu = new JobSeeker();
    priyanshu.applyForWork();
    priyanshu.applyForJob();

    // check inheritance
    result.push('priyanshu instanceof Candidate', priyanshu instanceof Candidate);
    result.push('priyanshu instanceof JobSeeker', priyanshu instanceof JobSeeker);
    console.log(result.join(', '));
    return result;
};