import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
const CustomProjectForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        college: "",
        specialization: "",
        projectTopic: "",
        instructions: ""
    });


    const specializations = [
        "Marketing Management",
        "Human Resource Management",
        "Business Analytics",
        "Operations Management",
        "IT Management",
        "Finance",
        "International Business",
        "Entrepreneurship"
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        // Placeholder: handle submission logic (e.g. API request) here

        setFormData({
            fullName: "",
            mobile: "",
            email: "",
            college: "",
            specialization: "",
            projectTopic: "",
            instructions: ""
        });

        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Request Custom Project Report</DialogTitle>
                    <p className="text-muted-foreground">
                        Get a unique, ready-to-upload project report tailored to your requirements
                    </p>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input
                                id="fullName"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange("fullName", e.target.value)}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="mobile">Mobile Number *</Label>
                            <Input
                                id="mobile"
                                value={formData.mobile}
                                onChange={(e) => handleInputChange("mobile", e.target.value)}
                                placeholder="Enter your mobile number"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email (Optional)</Label>
                        <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="Enter your email address"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="college">College Name *</Label>
                        <Input
                            id="college"
                            value={formData.college}
                            onChange={(e) => handleInputChange("college", e.target.value)}
                            placeholder="Enter your college/university name"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="specialization">Specialization *</Label>
                        <Select onValueChange={(value) => handleInputChange("specialization", value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select your specialization" />
                            </SelectTrigger>
                            <SelectContent>
                                {specializations.map((spec) => (
                                    <SelectItem key={spec} value={spec}>
                                        {spec}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="projectTopic">Project Topic (Optional)</Label>
                        <Input
                            id="projectTopic"
                            value={formData.projectTopic}
                            onChange={(e) => handleInputChange("projectTopic", e.target.value)}
                            placeholder="Enter your project topic if you have one"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="instructions">Special Instructions or Guidelines</Label>
                        <Textarea
                            id="instructions"
                            value={formData.instructions}
                            onChange={(e) => handleInputChange("instructions", e.target.value)}
                            placeholder="Any specific requirements, guidelines, or instructions..."
                            rows={4}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button type="submit" className="flex-1">
                            Submit Request
                        </Button>
                        <Button type="button" variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                    </div>
                </form>

                <div className="text-xs text-muted-foreground text-center border-t pt-4">
                    By submitting this form, you agree to be contacted for project discussions.
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CustomProjectForm;
