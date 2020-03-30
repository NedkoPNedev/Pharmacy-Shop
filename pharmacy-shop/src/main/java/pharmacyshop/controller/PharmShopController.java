package pharmacyshop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pharmacyshop.dto.CompanyDTO;
import pharmacyshop.service.PharmShopService;

@RestController
public class PharmShopController {

    private PharmShopService pharmShopService;

    @Autowired
    public PharmShopController(PharmShopService pharmShopService) {
        this.pharmShopService = pharmShopService;
    }

    @CrossOrigin
    @GetMapping("/pharm-company-names")
    public List<String> getAllCompanyNames() {
        return pharmShopService.getAllCompanyNames();
    }

    @CrossOrigin
    @GetMapping("/company-info/{name}")
    public CompanyDTO getCompanyInfoByName(@PathVariable("name") String companyName) {
        CompanyDTO companyDTO = pharmShopService.getCompanyInfoByName(companyName);
        return companyDTO;
    }
}
