package pharmacyshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pharmacyshop.repository.CompanyRepository;

import java.util.List;

@Service
public class PharmShopService {

    private CompanyRepository companyRepository;

    @Autowired
    public PharmShopService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public List<String> getAllCompanyNames() {
        return companyRepository.findAllCompanyNames();
    }
}
