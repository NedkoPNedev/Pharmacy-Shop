package pharmacyshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pharmacyshop.dto.CompanyDTO;
import pharmacyshop.dto.MedicineDTO;
import pharmacyshop.entity.Company;
import pharmacyshop.entity.Medicine;
import pharmacyshop.repository.CompanyRepository;
import pharmacyshop.repository.PharmClassRepository;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class PharmShopService {

    private final CompanyRepository companyRepository;
    private final PharmClassRepository pharmClassRepository;

    @Autowired
    public PharmShopService(CompanyRepository companyRepository, PharmClassRepository pharmClassRepository) {
        this.companyRepository = companyRepository;
        this.pharmClassRepository = pharmClassRepository;
    }

    public List<String> getAllCompanyNames() {
        return companyRepository.findAllCompanyNames();
    }

    public CompanyDTO getCompanyInfoByName(String name) {
        Company company = companyRepository.findCompanyInfoByCompanyName(name);

        return new CompanyDTO(company);
    }

    public Set<String> getAllPharmClassQuestions() {
        return pharmClassRepository.findAllPharmQuestions();
    }

    public List<MedicineDTO> getMedicinesForGivenPharmclassQuestion(String pharmClassQuestionQuestion) {
        List<Medicine> medicines = pharmClassRepository.findAllMedicinesForGivenClass(pharmClassQuestionQuestion);

        return medicines.stream()
                .map(this::convertMedicineToMedicineDTO)
                .collect(Collectors.toList());
    }

    private MedicineDTO convertMedicineToMedicineDTO(Medicine medicine) {
        MedicineDTO medicineDTO = new MedicineDTO(medicine);
        medicineDTO.setCompanyName(medicine.getPharmClass().getPharmCompany().getCompanyName());

        return medicineDTO;
    }
}
