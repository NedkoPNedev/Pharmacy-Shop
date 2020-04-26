package pharmacyshop.controller;

import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pharmacyshop.dto.CompanyDTO;
import pharmacyshop.dto.MedicineDTO;
import pharmacyshop.service.PharmShopService;

@RestController
public class PharmShopController {

    private final Logger log = LoggerFactory.getLogger(PharmShopController.class);

    private final PharmShopService pharmShopService;

    @Autowired
    public PharmShopController(PharmShopService pharmShopService) {
        this.pharmShopService = pharmShopService;
    }

    @CrossOrigin
    @GetMapping("/pharm-company-names")
    public List<String> getAllCompanyNames() {
        log.info("Request for resource pharm-company-names");

        return pharmShopService.getAllCompanyNames();
    }

    @CrossOrigin
    @GetMapping("/company-info/{name}")
    public CompanyDTO getCompanyInfoByName(@PathVariable("name") String companyName) {
        log.info("Request for resource company-info with parameter : " + companyName);

        return pharmShopService.getCompanyInfoByName(companyName);
    }

    @CrossOrigin
    @GetMapping("/pharmclass-questions")
    public Set<String> getAllPharmClassQuestions() {
        log.info("Request for resource pharmclass-questions");

        return pharmShopService.getAllPharmClassQuestions();
    }

    @CrossOrigin
    @GetMapping("/medicines/{pharmclass-question}")
    public List<MedicineDTO> getMedicinesForGivenPharmclass(
            @PathVariable("pharmclass-question") String pharmClassQuestion) {

        log.info("Request for resource medicines{pharmclass-question} with parameter : " + pharmClassQuestion);

        return pharmShopService.getMedicinesForGivenPharmclassQuestion(pharmClassQuestion);
    }
}
