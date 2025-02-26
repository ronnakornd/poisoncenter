import React, { useState } from 'react';

function PoisonCaseForm() {
  const [formData, setFormData] = useState({
    callDate: '',
    callTime: '',
    callerName: '',
    callerPhone: '',
    callerType: '',
    callerLocation: '',
    organizationName: '',
    organizationType: '',
    enquiryReason: '',
    communicationMethod: '',
    exposureCircumstance: '',
    exposureLocation: '',
    patientNumber: '',
    referral: '',
    agentCallerName: '',
    agentName: '',
    agentCategory: '',
    amount: '',
    exposureType: '',
    exposureDuration: '',
    exposureTime: '',
    exposureRoute: '',
    patientName: '',
    patientBirthDate: '',
    patientWeight: '',
    patientAddress: '',
    patientPhone: '',
    patientGender: '',
    patientAge: '',
    patientAgeCategory: '',
    patientOccupation: '',
    patientPregnancy: '',
    patientGestationalAgeWeek: '',
    patientGestationalAgePlusDay: '',
    patientGestationalTrimester: '',
    patientLactation: '',
    patientClinicalFeature: '',
    patientRelevantHistory: '',
    riskAssessment: '',
    investigation: '',
    treatment: '',
    dispositionAdvice: '',
    severityInitial: '',
    severityFinal: '',
    outcome: '',
    animal: '',
    multipleVictim: '',
    groupId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <h1>Case No: #</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 justify-start items-start p-10'>
        <label>
          Call Date:
          <input 
            className='input'
            type="date"
            name="callDate"
            value={formData.callDate}
            onChange={handleChange}
          />
        </label>

        <label>
          Call Time:
          <input 
            className='input'
            type="time"
            name="callTime"
            value={formData.callTime}
            onChange={handleChange}
          />
        </label>

        <label>
          Caller Name:
          <input 
            className='input'
            type="text"
            name="callerName"
            value={formData.callerName}
            onChange={handleChange}
          />
        </label>

        <label>
          Caller Phone:
          <input 
            className='input'
            type="text"
            name="callerPhone"
            value={formData.callerPhone}
            onChange={handleChange}
          />
        </label>

        <label>
          Caller Type:
          <input 
            className='input'
            type="text"
            name="callerType"
            value={formData.callerType}
            onChange={handleChange}
          />
        </label>

        <label>
          Caller Location:
          <input 
            className='input'
            type="text"
            name="callerLocation"
            value={formData.callerLocation}
            onChange={handleChange}
          />
        </label>

        <label>
          Organization Name:
          <input 
            className='input'
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
          />
        </label>

        <label>
          Organization Type:
          <input 
            className='input'
            type="text"
            name="organizationType"
            value={formData.organizationType}
            onChange={handleChange}
          />
        </label>

        <label>
          Enquiry Reason:
          <input 
            className='input'
            type="text"
            name="enquiryReason"
            value={formData.enquiryReason}
            onChange={handleChange}
          />
        </label>

        <label>
          Communication Method:
          <input 
            className='input'
            type="text"
            name="communicationMethod"
            value={formData.communicationMethod}
            onChange={handleChange}
          />
        </label>

        <label>
          Exposure Circumstance:
          <input 
            className='input'
            type="text"
            name="exposureCircumstance"
            value={formData.exposureCircumstance}
            onChange={handleChange}
          />
        </label>

        <label>
          Exposure Location:
          <input 
            className='input'
            type="text"
            name="exposureLocation"
            value={formData.exposureLocation}
            onChange={handleChange}
          />
        </label>

        <label>
          Patient Number:
          <input 
            className='input'
            type="number"
            name="patientNumber"
            value={formData.patientNumber}
            onChange={handleChange}
          />
        </label>

        <label>
          Referral:
          <input 
            className='input'
            type="text"
            name="referral"
            value={formData.referral}
            onChange={handleChange}
          />
        </label>

        <label>
          Agent Caller Name:
          <input 
            className='input'
            type="text"
            name="agentCallerName"
            value={formData.agentCallerName}
            onChange={handleChange}
          />
        </label>

        <label>
          Agent Name:
          <input 
            className='input'
            type="text"
            name="agentName"
            value={formData.agentName}
            onChange={handleChange}
          />
        </label>

        <label>
          Agent Category:
          <input 
            className='input'
            type="text"
            name="agentCategory"
            value={formData.agentCategory}
            onChange={handleChange}
          />
        </label>

        <label>
          Amount:
          <input 
            className='input'
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>

        <label>
          Exposure Type:
          <input 
            className='input'
            type="text"
            name="exposureType"
            value={formData.exposureType}
            onChange={handleChange}
          />
        </label>

        <label>
          Exposure Duration:
          <input 
            className='input'
            type="text"
            name="exposureDuration"
            value={formData.exposureDuration}
            onChange={handleChange}
          />
        </label>

        <label>
          Exposure Time:
          <input 
            className='input'
            type="text"
            name="exposureTime"
            value={formData.exposureTime}
            onChange={handleChange}
          />
        </label>

        <label>
          Exposure Route:
          <input 
            className='input'
            type="text"
            name="exposureRoute"
            value={formData.exposureRoute}
            onChange={handleChange}
          />
        </label>

        <label>
          Patient Name:
          <input 
            className='input'
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
          />
        </label>

        <label>
          Patient Birth Date:
          <input 
            className='input'
            type="date"
            name="patientBirthDate"
            value={formData.patientBirthDate}
            onChange={handleChange}
          />
        </label>

        <label>
          Patient Weight:
          <input 
            className='input'
            type="number"
            name="patientWeight"
            value={formData.patientWeight}
            onChange={handleChange}
          />
        </label>

        <label>
          Patient Address:
          <input 
            className='input'
            type="text"
            name="patientAddress"
            value={formData.patientAddress}
            onChange={handleChange}
          />
        </label>

        <label>
          Patient Phone:
          <input 
            className='input'
            type="number"
            name="patientPhone"
            value={formData.patientPhone}
            onChange={handleChange}
          />
        </label>

        <label>
          Patient Gender:
          <input 
            className='input'
            type="text"
            name="patientGender"
            value={formData.patientGender}
            onChange={handleChange}
          />
        </label>

        <label>
          Patient Age:
          <input 
            className='input'
            type="number"
            name="patientAge"
            value={formData.patientAge}
            onChange={handleChange}
          />
        </label>

        <label>
          Patient Age Category:
          <input 
            className='input'
            type="text"
            name="patientAgeCategory"
            value={formData.patientAgeCategory}
            onChange={handleChange}
          />
        </label>

        <label>
          Patient Occupation:
          <input 
            className='input'
            type="text"
            name="patientOccupation"
            value={formData.patientOccupation}
            onChange={handleChange}
          />
        </label>

        <label>
          Patient Pregnancy:
          <input 
            className='input'
            type="checkbox"
            name="patientPregnancy"
            checked={formData.patientPregnancy}
            onChange={handleChange}
          />
        </label>

        <label>
          Gestational Age (Week):
          <input 
            className='input'
            type="number"
            name="patientGestationalAgeWeek"
            value={formData.patientGestationalAgeWeek}
            onChange={handleChange}
          />
        </label>

        <label>
          Gestational Age (Week + Day):
          <input 
            className='input'
            type="number"
            name="patientGestationalAgePlusDay"
            value={formData.patientGestationalAgePlusDay}
            onChange={handleChange}
          />
        </label>

        <label>
          Gestational Trimester:
          <input 
            className='input'
            type="number"
            name="patientGestationalTrimester"
            value={formData.patientGestationalTrimester}
            onChange={handleChange}
          />
        </label>

        <label>
          Lactation:
          <input 
            className='input'
            type="checkbox"
            name="patientLactation"
            checked={formData.patientLactation}
            onChange={handleChange}
          />
        </label>

        <label>
          Patient Clinical Feature:
          <input 
            className='input'
            type="text"
            name="patientClinicalFeature"
            value={formData.patientClinicalFeature}
            onChange={handleChange}
          />
        </label>

        <label>
          Patient Relevant History:
          <input 
            className='input'
            type="text"
            name="patientRelevantHistory"
            value={formData.patientRelevantHistory}
            onChange={handleChange}
          />
        </label>

        <label>
          Risk Assessment:
          <input 
            className='input'
            type="text"
            name="riskAssessment"
            value={formData.riskAssessment}
            onChange={handleChange}
          />
        </label>

        <label>
          Investigation:
          <input 
            className='input'
            type="text"
            name="investigation"
            value={formData.investigation}
            onChange={handleChange}
          />
        </label>

        <label>
          Treatment:
          <input 
            className='input'
            type="text"
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
          />
        </label>

        <label>
          Disposition Advice:
          <input 
            className='input'
            type="text"
            name="dispositionAdvice"
            value={formData.dispositionAdvice}
            onChange={handleChange}
          />
        </label>

        <label>
          Initial Severity:
          <input 
            className='input'
            type="text"
            name="severityInitial"
            value={formData.severityInitial}
            onChange={handleChange}
          />
        </label>

        <label>
          Final Severity:
          <input 
            className='input'
            type="text"
            name="severityFinal"
            value={formData.severityFinal}
            onChange={handleChange}
          />
        </label>

        <label>
          Outcome:
          <input 
            className='input'
            type="text"
            name="outcome"
            value={formData.outcome}
            onChange={handleChange}
          />
        </label>

        <label>
          Animal:
          <input 
            className='input'
            type="checkbox"
            name="animal"
            checked={formData.animal}
            onChange={handleChange}
          />
        </label>

        <label>
          Multiple Victim:
          <input 
            className='input'
            type="checkbox"
            name="multipleVictim"
            checked={formData.multipleVictim}
            onChange={handleChange}
          />
        </label>

        <label>
          Group ID:
          <input 
            className='input'
            type="number"
            name="groupId"
            value={formData.groupId}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Create Case</button>
      </form>
    </div>
  );
}

export default PoisonCaseForm;
