package pharmacyshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pharmacyshop.dto.CompanyDTO;
import pharmacyshop.entity.Company;
import pharmacyshop.repository.CompanyRepository;
import pharmacyshop.repository.PharmClassRepository;

import java.util.List;
import java.util.Set;

@Service
public class PharmShopService {

    private CompanyRepository companyRepository;
    private PharmClassRepository pharmClassRepository;

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

        CompanyDTO companyDTO = new CompanyDTO(company);
        return companyDTO;
    }

    public Set<String> getAllPharmClassQuestions() {
        return pharmClassRepository.findAllPharmQuestions();
    }
}
