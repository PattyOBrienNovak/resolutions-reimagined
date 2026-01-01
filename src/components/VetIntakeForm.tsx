import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface VetIntakeFormData {
  // Owner Information
  ownerFirstName: string;
  ownerLastName: string;
  ownerEmail: string;
  ownerPhone: string;
  ownerAddress: string;

  // Pet Information
  petName: string;
  petSpecies: string;
  petBreed: string;
  petAge: string;
  petWeight: string;
  petGender: string;

  // Medical Information
  reasonForVisit: string;
  currentMedications: string;
  allergies: string;
  previousConditions: string;
  isVaccinated: boolean;
  lastVetVisit: string;
}

export default function VetIntakeForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<VetIntakeFormData>({
    ownerFirstName: "",
    ownerLastName: "",
    ownerEmail: "",
    ownerPhone: "",
    ownerAddress: "",
    petName: "",
    petSpecies: "",
    petBreed: "",
    petAge: "",
    petWeight: "",
    petGender: "",
    reasonForVisit: "",
    currentMedications: "",
    allergies: "",
    previousConditions: "",
    isVaccinated: false,
    lastVetVisit: "",
  });

  const handleInputChange = (field: keyof VetIntakeFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.ownerFirstName || !formData.ownerLastName || !formData.petName) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (owner name and pet name).",
        variant: "destructive",
      });
      return;
    }

    // Success
    console.log("Form submitted:", formData);
    toast({
      title: "Form Submitted!",
      description: "Your pet's intake form has been successfully submitted.",
      className: "bg-[#ecfccb] border-[#84cc16] text-[#365314]",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-purple-600">
              Veterinary Intake Form
            </CardTitle>
            <CardDescription>
              Please complete this form for your pet's appointment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Owner Information Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-purple-500 pl-3">
                  Owner Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ownerFirstName">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="ownerFirstName"
                      value={formData.ownerFirstName}
                      onChange={(e) => handleInputChange("ownerFirstName", e.target.value)}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ownerLastName">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="ownerLastName"
                      value={formData.ownerLastName}
                      onChange={(e) => handleInputChange("ownerLastName", e.target.value)}
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ownerEmail">Email</Label>
                    <Input
                      id="ownerEmail"
                      type="email"
                      value={formData.ownerEmail}
                      onChange={(e) => handleInputChange("ownerEmail", e.target.value)}
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ownerPhone">Phone Number</Label>
                    <Input
                      id="ownerPhone"
                      type="tel"
                      value={formData.ownerPhone}
                      onChange={(e) => handleInputChange("ownerPhone", e.target.value)}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="ownerAddress">Address</Label>
                    <Input
                      id="ownerAddress"
                      value={formData.ownerAddress}
                      onChange={(e) => handleInputChange("ownerAddress", e.target.value)}
                      placeholder="123 Main St, City, State 12345"
                    />
                  </div>
                </div>
              </div>

              {/* Pet Information Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-lime-500 pl-3">
                  Pet Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="petName">
                      Pet Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="petName"
                      value={formData.petName}
                      onChange={(e) => handleInputChange("petName", e.target.value)}
                      placeholder="Max"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="petSpecies">Species</Label>
                    <Select
                      value={formData.petSpecies}
                      onValueChange={(value) => handleInputChange("petSpecies", value)}
                    >
                      <SelectTrigger id="petSpecies">
                        <SelectValue placeholder="Select species" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">Dog</SelectItem>
                        <SelectItem value="cat">Cat</SelectItem>
                        <SelectItem value="bird">Bird</SelectItem>
                        <SelectItem value="rabbit">Rabbit</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="petBreed">Breed</Label>
                    <Input
                      id="petBreed"
                      value={formData.petBreed}
                      onChange={(e) => handleInputChange("petBreed", e.target.value)}
                      placeholder="Labrador Retriever"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="petAge">Age</Label>
                    <Input
                      id="petAge"
                      value={formData.petAge}
                      onChange={(e) => handleInputChange("petAge", e.target.value)}
                      placeholder="3 years"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="petWeight">Weight</Label>
                    <Input
                      id="petWeight"
                      value={formData.petWeight}
                      onChange={(e) => handleInputChange("petWeight", e.target.value)}
                      placeholder="50 lbs"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="petGender">Gender</Label>
                    <Select
                      value={formData.petGender}
                      onValueChange={(value) => handleInputChange("petGender", value)}
                    >
                      <SelectTrigger id="petGender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="neutered">Neutered Male</SelectItem>
                        <SelectItem value="spayed">Spayed Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Medical Information Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-pink-500 pl-3">
                  Medical Information
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reasonForVisit">Reason for Visit</Label>
                    <Textarea
                      id="reasonForVisit"
                      value={formData.reasonForVisit}
                      onChange={(e) => handleInputChange("reasonForVisit", e.target.value)}
                      placeholder="Describe the reason for this visit..."
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentMedications">Current Medications</Label>
                    <Textarea
                      id="currentMedications"
                      value={formData.currentMedications}
                      onChange={(e) => handleInputChange("currentMedications", e.target.value)}
                      placeholder="List any current medications..."
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="allergies">Known Allergies</Label>
                    <Textarea
                      id="allergies"
                      value={formData.allergies}
                      onChange={(e) => handleInputChange("allergies", e.target.value)}
                      placeholder="List any known allergies..."
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousConditions">Previous Medical Conditions</Label>
                    <Textarea
                      id="previousConditions"
                      value={formData.previousConditions}
                      onChange={(e) => handleInputChange("previousConditions", e.target.value)}
                      placeholder="List any previous medical conditions..."
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastVetVisit">Last Veterinary Visit</Label>
                    <Input
                      id="lastVetVisit"
                      type="date"
                      value={formData.lastVetVisit}
                      onChange={(e) => handleInputChange("lastVetVisit", e.target.value)}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isVaccinated"
                      checked={formData.isVaccinated}
                      onCheckedChange={(checked) => handleInputChange("isVaccinated", checked as boolean)}
                    />
                    <Label
                      htmlFor="isVaccinated"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Vaccinations are up to date
                    </Label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setFormData({
                      ownerFirstName: "",
                      ownerLastName: "",
                      ownerEmail: "",
                      ownerPhone: "",
                      ownerAddress: "",
                      petName: "",
                      petSpecies: "",
                      petBreed: "",
                      petAge: "",
                      petWeight: "",
                      petGender: "",
                      reasonForVisit: "",
                      currentMedications: "",
                      allergies: "",
                      previousConditions: "",
                      isVaccinated: false,
                      lastVetVisit: "",
                    });
                  }}
                >
                  Clear Form
                </Button>
                <Button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Submit Intake Form
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
